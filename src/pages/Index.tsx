
import { ExternalLink, Github, FileText, Video, Database, BookOpen, FileImage, ChevronDown, ChevronRight, Brain, Zap, Target, TrendingUp, CheckCircle, Users, Award, Mail } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AggTruth</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-gray-600 hover:text-blue-600 transition-colors">Overview</a>
              <a href="#method" className="text-gray-600 hover:text-blue-600 transition-colors">Method</a>
              <a href="#results" className="text-gray-600 hover:text-blue-600 transition-colors">Results</a>
              <a href="#artifacts" className="text-gray-600 hover:text-blue-600 transition-colors">Artifacts</a>
              <a href="https://github.com/Hallucination-LLM/Research" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Award className="w-4 h-4 mr-2" />
              ICCS 2025 • RAG Workshop
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">AggTruth</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Real-Time Hallucination Detection
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              🧪 A novel method that detects hallucinations in LLMs during inference. 
              Accurate, fast, lightweight – and ready for real-time use.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="outline">
                <FileText className="w-5 h-5 mr-2" />
                Read Paper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* Problem & Motivation */}
        <section id="overview" className="mb-16">
          <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <CardTitle className="text-2xl text-gray-900">Problem & Motivation</CardTitle>
                <CardDescription className="text-lg">Why real-time hallucination detection matters</CardDescription>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Hallucinations in large language models undermine their reliability, especially in 
                <strong className="text-amber-700"> scientific, legal, and financial contexts</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                AggTruth explores whether hallucinations can be detected <em>as the model generates text</em>, 
                helping pave the way for safer AI systems.
              </p>
            </div>
          </Card>
        </section>

        {/* How It Works */}
        <section id="method" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">⚙️ How It Works</h2>
            <p className="text-lg text-gray-600">Understanding the attention aggregation pipeline</p>
          </div>

          <Card className="p-8 shadow-lg border-0 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-6">
              <div className="text-center">
                <div className="w-full h-auto bg-white rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-4">Attention Aggregation Pipeline</h3>
                    <img 
                      src={`${import.meta.env.BASE_URL}diagram.svg`} 
                      alt="Flow Diagram: Attention Aggregation Pipeline"
                      className="w-full max-w-full mx-auto rounded-lg border border-gray-200 shadow"
                    />
                  </div>
                </div>
                <p className="text-gray-700">
                  The method analyzes attention maps during decoding, aggregating attention and identifying hallucinations.
                </p>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="technical-details">
                <AccordionTrigger className="text-lg font-semibold">
                  🔍 Technical Details
                </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-sm text-gray-700 mb-6">
                        Below are the attention aggregation techniques used in <strong>AggTruth</strong>:
                      </p>
                    
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center h-48">
    <img
      src={`${import.meta.env.BASE_URL}sum.png`}
      alt="Sum formula"
      className="scale-[0.30] object-contain"
    />
  </div>

  <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center h-48">
    <img
      src={`${import.meta.env.BASE_URL}cossim.png`}
      alt="CosSim formula"
      className="scale-[0.65] object-contain"
    />
  </div>

  <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center h-48">
    <img
      src={`${import.meta.env.BASE_URL}entropy.png`}
      alt="Entropy formula"
      className="scale-[0.59] object-contain"
    />
  </div>

  <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center h-48">
    <img
      src={`${import.meta.env.BASE_URL}jsdiv.png`}
      alt="JS-Div formula"
      className="scale-100 object-contain"
    />
  </div>
</div>

                    </div>
                </AccordionContent>

              </AccordionItem>
            </Accordion>
          </Card>
        </section>

        {/* What We Built */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Key features</h2>
            <p className="text-lg text-gray-600">Fast and accurate detection tailored for diverse models and datasets.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Online Detection", desc: "Enables real-time evaluation of partial outputs during generation." },
              { icon: "📊", title: "Arbitrary Window Length", desc: "Efficiently scales across varying fragment sizes under evaluation." },
              { icon: "🤖", title: "Multi-Model Support", desc: "Compatible with LLaMA, Phi, Gemma models." },
              { icon: "🌐", title: "High Generalizability", desc: "Demonstrates robustness across diverse tasks and datasets." },
              { icon: "🏆", title: "State-of-the-Art Performance", desc: "Surpasses previous state-of-the-art solutions." },
              { icon: "🛠️", title: "Automated Evaluation Pipeline", desc: "Facilitates systematic benchmarking and comparison of method variants." }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-gray-50">
                <div className="text-center">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <CheckCircle className="w-5 h-5 text-green-500 mx-auto mt-3" />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Results */}
        <section id="results" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📊 Results</h2>
            <p className="text-lg text-gray-600">Comparison across different LLMs, tasks and datasets</p>
          </div>

          <Card className="p-8 shadow-lg border-0">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8">
              <div className="w-full h-200 bg-white rounded-lg border-2 border-dashed border-green-300 flex items-center justify-center mb-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-4">AggTruth Compared To Baselines</h3>
                  <img 
                    src={`${import.meta.env.BASE_URL}high.png`} 
                    alt="AggTruth vs SOTA Comparison" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700 text-center">
                AggTruth Sum consistently delivers high and most stable AUCROC across all tasks and datasets, showing robustness to different training data. AggTruth, unlike hidden state-based baselines, tend to generalize better and avoid overfitting, resulting in improved performance on out-of-domain data. Lookback-Lens experiences a significant drop in performance in certain settings, highlighting its instability. Overall, AggTruth methods outperform baselines, with AggTruth JS-DIV leading on Phi-3.5 and Llama-3, and AggTruth Sum excelling on Gemma-2.
              </p>
            </div>

            

            {/* <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
                <div className="font-semibold text-gray-900">Top Performing</div>
                <div className="text-sm text-gray-600">Ranked #1 in 75% of Experiments</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">0.85 AUC</div>
                <div className="font-semibold text-gray-900">Classification Accuracy</div>
                <div className="text-sm text-gray-600">For Llama-3.1</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">↓ 40ms</div>
                <div className="font-semibold text-gray-900">Latency</div>
                <div className="text-sm text-gray-600">Real-time capable</div>
              </div>
            </div> */}
          </Card>
        </section>

        {/* Presentations */}
        <section className="mb-16">
          <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <CardTitle className="text-2xl text-gray-900">Where We Present</CardTitle>
                <CardDescription className="text-lg">Academic conferences and seminars</CardDescription>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-6 bg-white rounded-lg">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-semibold text-gray-900">ICCS 2025, Singapore</div>
                  <div className="text-sm text-gray-600">International Conference on Computational Science</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-6 bg-white rounded-lg">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-semibold text-gray-900">AI Forum, Wrocław Tech</div>
                  <div className="text-sm text-gray-600">Summary of Research Projects by Master's Students in AI</div>
                </div>
              </div>
              {/* <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-semibold text-gray-900">Master's Thesis</div>
                  <div className="text-sm text-gray-600">WUST</div>
                </div>
              </div> */}
            </div>
          </Card>
        </section>

        {/* artifacts */}
        <section id="artifacts" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔗 Artifacts</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Paper (ICCS 2025)", desc: "PDF Document", color: "blue", url: "https://example.com/paper.pdf" },
              { icon: FileImage, title: "Poster", desc: "AI Forum Poster", color: "green", url: "poster.pdf" },
              { icon: FileText, title: "Piotr Matys - Thesis", desc: "PDF Document", color: "orange", url: "thesis_piotrek.pdf" },
              { icon: FileText, title: "Konrad Kiełczyński - Thesis", desc: "PDF Document", color: "orange", url: "thesis_konrad.pdf" },
              { icon: FileText, title: "Mikołaj Langner - Thesis", desc: "PDF Document", color: "orange", url: "thesis_mikolaj.pdf" },
              { icon: FileText, title: "Jan Eliasz - Thesis", desc: "PDF Document", color: "orange", url: "thesis_janek.pdf" }
            ].map((resource, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-200 border-0">
                <CardContent className="p-6">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-${resource.color}-100 rounded-xl flex items-center justify-center group-hover:bg-${resource.color}-200 transition-colors`}>
                        <resource.icon className={`w-6 h-6 text-${resource.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 group-hover:text-blue-700">{resource.title}</div>
                        <div className="text-sm text-gray-500">{resource.desc}</div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
  <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">📬</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact & Credits</h2>
      <p className="text-gray-700 mb-4">
        Created by the Skibidi Σ AI Research Team at <strong>Wrocław University of Science and Technology</strong>.
      </p>
      <p className="text-gray-700 mb-8">
        Supervised by Jan Kocoń, Phd
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        <div className="flex items-center justify-center text-sm text-gray-600">
          <Mail className="w-4 h-4 mr-2 text-blue-500" />
          piotr.matys@asseco.pl
        </div>
        <div className="flex items-center justify-center text-sm text-gray-600">
          <Mail className="w-4 h-4 mr-2 text-blue-500" />
          jan.eliasz@pwr.edu.pl
        </div>
        <div className="flex items-center justify-center text-sm text-gray-600">
          <Mail className="w-4 h-4 mr-2 text-blue-500" />
          konradkielczynski@gmail.com
        </div>
        <div className="flex items-center justify-center text-sm text-gray-600">
          <Mail className="w-4 h-4 mr-2 text-blue-500" />
          mikolaj.langner@pwr.edu.pl
        </div>
      </div>
    </div>
  </Card>
</section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Skibidi Σ AI Research Team Logo" 
                  className="w-32 object-contain"
                />
              </div>
            </div>
            {/* <span className="text-xl font-bold text-gray-900 ml-3">AggTruth</span>
            <p className="text-gray-500 mb-2">Real-Time Hallucination Detection for Language Models</p> */}
            <p className="text-sm text-gray-400">Wrocław University of Science and Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
