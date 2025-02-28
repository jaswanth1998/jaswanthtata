import React, {
    useState,
    useEffect,
    useRef,
    KeyboardEvent,
    ChangeEvent,
    useCallback,
  } from 'react';
  import { motion } from 'framer-motion';
  import { Loader2, Send, StopCircle } from 'lucide-react';
  import './ChatWidget.css';
  
  interface Message {
    sender: 'user' | 'bot';
    text: string;
    type?: 'normal' | 'error';
  }
  
  const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
      { sender: 'bot', text: "Ask anything about Jaswanth's professional experience.", type: 'normal' },
    ]);
    const [inputText, setInputText] = useState<string>('');
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [typingMessage, setTypingMessage] = useState<string>('');
  
    // Refs for managing auto-scroll, typing interval, and abort controller
    const chatBodyRef = useRef<HTMLDivElement>(null);
    const typingIntervalRef = useRef<number | null>(null);
    const abortControllerRef = useRef<AbortController | null>(null);
  
    // Auto-scroll to bottom on new messages or typing updates
    useEffect(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, [messages, typingMessage]);
  
    // Function to send the user's message
    const handleSendMessage = useCallback(async () => {
      if (!inputText.trim() || isGenerating) return;
      const userMessage = inputText;
      setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
      setInputText('');
      setIsGenerating(true);
  
      // Create an AbortController to allow stopping the request
      const controller = new AbortController();
      abortControllerRef.current = controller;
  
      try {
        const response = await fetch('https://plaper-441203.uc.r.appspot.com/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage }),
          signal: controller.signal,
        });
        const data = await response.json();
        simulateTyping(data.response);
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Request aborted by user.');
        } else {
          console.error('Error sending message:', error);
          // Append an error message styled differently
          setMessages((prev) => [
            ...prev,
            {
              sender: 'bot',
              text: "An error occurred while responding. Please try again.",
              type: 'error',
            },
          ]);
        }
        setIsGenerating(false);
      }
    }, [inputText, isGenerating]);
  
    // Simulate the bot's typing effect
    const simulateTyping = (fullText: string) => {
      let currentIndex = 0;
      setTypingMessage('');
  
      // Clear any previous typing interval
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
  
      typingIntervalRef.current = window.setInterval(() => {
        currentIndex++;
        setTypingMessage(fullText.substring(0, currentIndex));
        if (currentIndex === fullText.length) {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
          }
          setTypingMessage('');
          setMessages((prev) => [...prev, { sender: 'bot', text: fullText, type: 'normal' }]);
          setIsGenerating(false);
        }
      }, 50); // Adjust typing speed as needed
    };
  
    // Stops the current generation and aborts the fetch
    const handleStopGenerating = () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      // Finalize whatever is typed so far as the bot's response
      if (typingMessage) {
        setMessages((prev) => [...prev, { sender: 'bot', text: typingMessage, type: 'normal' }]);
        setTypingMessage('');
      }
      setIsGenerating(false);
    };
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    };
  
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !isGenerating) {
        handleSendMessage();
      }
    };
  
    // When button is clicked, if generating, stop; otherwise, send the message
    const handleButtonClick = () => {
      if (isGenerating) {
        handleStopGenerating();
      } else {
        handleSendMessage();
      }
    };
  
    return (
      <div className="chat-widget-container">
        {/* Floating Action Button */}
        {!isOpen && (
          <div className="floating-button" onClick={() => setIsOpen(true)}>
            <span className="floating-button-text">Chat to know about me</span>
          </div>
        )}
  
        {/* Chat Panel */}
        {isOpen && (
          <motion.div
            className="chat-panel"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="chat-header">
              <span>Chat with Jaswanth</span>
              <button className="close-button" onClick={() => setIsOpen(false)}>
                X
              </button>
            </div>
            <div className="chat-body" ref={chatBodyRef}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.sender === 'user'
                      ? 'user-message'
                      : `bot-message ${msg.type === 'error' ? 'error-message' : ''}`
                  }
                >
                  {msg.text}
                </div>
              ))}
              {typingMessage && <div className="bot-message">{typingMessage}</div>}
              {isGenerating && !typingMessage && (
                <div className="typing-indicator">
                  <Loader2 size={20} className="animate-spin" />
                  <span>Typing...</span>
                </div>
              )}
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                className="chat-input"
                placeholder="Type your message..."
                onKeyPress={handleKeyPress}
                disabled={isGenerating} // Optionally disable input while generating
              />
              <button className="send-button" onClick={handleButtonClick}>
                {isGenerating ? <StopCircle size={20} color="white" /> : <Send size={20} color="white" />}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    );
  };
  
  export default ChatWidget;
  