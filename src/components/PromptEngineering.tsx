import { Sparkles, Brain, MessageSquare, Zap, Code2, Bot, Terminal, Lightbulb } from 'lucide-react';

const promptProjects = [
  {
    title: "AI Assistant Framework",
    description: "Developed sophisticated prompt patterns for context-aware AI responses",
    category: "Framework",
    icon: Bot,
    technologies: ["GPT-4", "Claude", "Prompt Engineering", "Python"],
    metrics: "98% accuracy in response generation"
  },
//   {
//     title: "Multilingual Chatbot",
//     description: "Created prompts for seamless multilingual conversations",
//     category: "NLP",
//     icon: MessageSquare,
//     technologies: ["LangChain", "Prompt Engineering", "NLP"],
//     metrics: "Support for 20+ languages"
//   },
  {
    title: "Code Generation System",
    description: "Engineered prompts for accurate code generation and documentation",
    category: "Development",
    icon: Code2,
    technologies: ["GitHub Copilot", "Prompt Engineering", "Documentation"],
    metrics: "85% code acceptance rate"
  }
];

const examplePrompts = [
  {
    title: "Code Review Assistant",
    prompt: `Act as a senior software developer conducting a code review. Analyze the following code for:
- Best practices
- Potential bugs
- Performance issues
- Security concerns
Provide specific, actionable feedback with examples.`,
    description: "Generates detailed code reviews with actionable feedback",
    icon: Terminal
  },
  {
    title: "Technical Documentation",
    prompt: `Create comprehensive documentation for the following API endpoint:
- Include description, parameters, response format
- Add example requests and responses
- List common errors and solutions
- Provide usage guidelines and best practices`,
    description: "Produces clear and detailed technical documentation",
    icon: Code2
  },
  {
    title: "Problem-Solving Guide",
    prompt: `You are a programming mentor helping a student understand [concept].
1. Explain the concept in simple terms
2. Provide a real-world analogy
3. Show a basic code example
4. Include practice exercises
5. List common pitfalls to avoid`,
    description: "Creates educational content with practical examples",
    icon: Lightbulb
  }
];

export default function PromptEngineering() {
  return (
    <section className="section-padding bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-500 mr-3" />
            <h2 className="text-4xl font-bold">Prompt Engineering</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting intelligent conversations and building bridges between human intent and AI capabilities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <Brain className="w-12 h-12 text-purple-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Context-aware prompt design
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Chain-of-thought prompting
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Few-shot learning patterns
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Prompt optimization and testing
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <MessageSquare className="w-12 h-12 text-purple-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Specializations</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Natural language processing
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Conversational AI design
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Code generation prompts
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-purple-500 mr-2" />
                Content generation frameworks
              </li>
            </ul>
          </div>
        </div>

        {/* Example Prompts Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Example Prompts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {examplePrompts.map((example, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <example.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold mb-3">{example.title}</h4>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono">
                    {example.prompt}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {promptProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <project.icon className="w-6 h-6 text-purple-600" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600">
                  {project.category}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Performance</h4>
                  <p className="text-sm text-gray-600">{project.metrics}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}