import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const DeveloperTerminal: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'cli' | 'repos'>('cli');

  const terminalCommand = `curl -s https://api.github.com/users/${PERSONAL_INFO.github}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const repositories = [
    {
      name: 'lead-gen-crm-automation',
      desc: 'AI-driven n8n workflow pipeline for lead intake, qualification, and Airtable CRM integration.',
      lang: 'JavaScript / n8n',
      color: 'bg-yellow-400'
    },
    {
      name: 'multi-agent-research-system',
      desc: 'Autonomous multi-agent research coordinator synthesizing web data into structured intelligence.',
      lang: 'Python / AI Agents',
      color: 'bg-blue-400'
    },
    {
      name: 'ai-career-roadmap-generator',
      desc: 'Personalized career path generator leveraging Gemini & OpenAI reasoning APIs.',
      lang: 'TypeScript / AI',
      color: 'bg-cyan-400'
    },
    {
      name: 'campusmart',
      desc: 'University campus student marketplace platform for textbooks and dorm essentials.',
      lang: 'PHP / MySQL',
      color: 'bg-purple-400'
    }
  ];

  return (
    <section 
      id="terminal" 
      aria-label="Developer Terminal & GitHub"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Headline & Overview */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-400 text-xs font-mono mb-3">
            <TerminalIcon size={13} />
            <span>OPEN SOURCE & REPOSITORIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
            Code. Automate. Build. Repeat.
          </h2>

          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Explore my codebases, workflow configurations, scripts, and open-source automation templates hosted directly on GitHub.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 hover:border-cyan-500/40 text-white text-xs font-semibold font-mono transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <GithubIcon size={15} />
              <span>Visit GitHub @{PERSONAL_INFO.github}</span>
              <ExternalLink size={13} className="text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Right Terminal Console */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-[#0C0C0C] border border-white/15 shadow-2xl overflow-hidden font-mono text-xs"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                <span className="text-[11px] text-zinc-400 ml-2 font-mono">bash - moshiur@terminal:~</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveTab('cli')}
                  className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                    activeTab === 'cli' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  whoami
                </button>
                <button
                  onClick={() => setActiveTab('repos')}
                  className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                    activeTab === 'repos' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  repos (4)
                </button>
                <button
                  onClick={copyToClipboard}
                  title="Copy curl command"
                  aria-label="Copy terminal command"
                  className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors ml-1"
                >
                  {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 text-zinc-300 min-h-[260px] flex flex-col justify-between">
              {activeTab === 'cli' ? (
                <div className="space-y-4 leading-relaxed">
                  <div>
                    <span className="text-cyan-400 font-semibold">$ whoami</span>
                    <p className="text-zinc-100 font-bold ml-2 mt-0.5">{PERSONAL_INFO.github}</p>
                  </div>

                  <div>
                    <span className="text-cyan-400 font-semibold">$ focus</span>
                    <div className="ml-2 mt-0.5 text-zinc-300 space-y-0.5">
                      <p className="text-emerald-400">↳ AI Automation</p>
                      <p className="text-cyan-400">↳ Workflow Engineering</p>
                      <p className="text-blue-400">↳ AI Agents</p>
                      <p className="text-purple-400">↳ Backend Development</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-cyan-400 font-semibold">$ status</span>
                    <p className="text-zinc-200 ml-2 mt-0.5">
                      learning • building • improving
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1 text-zinc-400">
                    <span className="text-emerald-400">user@workspace</span>:<span className="text-cyan-400">~</span>$ <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse ml-0.5" />
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <div className="text-zinc-400 text-[11px] mb-2">
                    $ gh repo list moshiurcodes --limit 4
                  </div>
                  {repositories.map((repo) => (
                    <a
                      key={repo.name}
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-300 font-semibold group-hover:underline">
                          {repo.name}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                          <span className={`w-2 h-2 rounded-full ${repo.color}`} />
                          <span>{repo.lang}</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                        {repo.desc}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Terminal Footer Info */}
            <div className="px-4 py-2 bg-[#090909] border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-400">
              <span>Branch: <strong className="text-zinc-300">main</strong></span>
              <span>UTF-8</span>
              <span>Platform: <strong className="text-cyan-400">Git / GitHub</strong></span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
