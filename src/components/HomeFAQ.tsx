import React from 'react';
import { ArrowRight, Mountain, Calendar } from 'lucide-react';

interface HomeFAQProps {
  onNavigateDestinations: () => void;
  onNavigateArticle: (slug: string) => void;
}

export const HomeFAQ: React.FC<HomeFAQProps> = ({
  onNavigateDestinations,
  onNavigateArticle,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-white text-[#252C26] border-y border-[#A8B69A]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead-in */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#647A52] font-semibold block mb-2">
            Practical Outdoor Knowledge
          </span>
          {/* Relevant H2 incorporating the main keyword naturally */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#183D32] tracking-tight">
            Why Maharashtra Trekking Is a Unique Western Ghats Adventure
          </h2>
          <div className="w-12 h-0.5 bg-[#806B50] mx-auto my-5" />
          <p className="text-sm sm:text-base text-[#252C26]/80 font-light leading-relaxed">
            From volcanic basalt cliffs carved 65 million years ago to 17th-century mountain forts, exploring the <strong>best treks in Maharashtra</strong> offers hikers rich history and dramatic natural beauty. Below are essential answers to help you plan your journey.
          </p>
        </div>

        {/* Two Q&A Sections as H2 Headings with direct answers immediately below */}
        <div className="space-y-12">
          {/* Question 1 */}
          <article className="p-6 sm:p-8 bg-[#F5F3EA] rounded-2xl border border-[#A8B69A]/40 shadow-xs">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#183D32] text-[#F5F3EA] flex items-center justify-center shrink-0 mt-0.5">
                <Mountain className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#647A52] block mb-1">
                  Destination Advice
                </span>
                {/* H2 Question */}
                <h2 className="font-serif text-2xl sm:text-3xl text-[#183D32] font-semibold leading-snug">
                  What are the best trekking places in Maharashtra?
                </h2>
              </div>
            </div>

            {/* Direct, concise answer immediately below the H2 */}
            <p className="text-base text-[#183D32] font-medium leading-relaxed pl-11 mb-4">
              The best trekking places in Maharashtra include Kalsubai Peak (Maharashtra's highest summit at 1,646 meters), Harishchandragad with its monumental 1,800-foot Konkan Kada cliff, Harihar Fort famous for its 80-degree rock-cut steps, Rajmachi Fort overlooking the historic Borghat pass, and the descending misty rainforest trail of Andharban in Tamhini Ghat. For beginners and families, Lohagad Fort and Sinhagad Fort offer gentle ascents with fortified stone staircases and authentic village food within 2 to 3 hours from Mumbai and Pune.
            </p>

            {/* Supporting Details and Internal Links */}
            <div className="pl-11 pt-2 space-y-3 text-sm text-[#252C26]/85 font-light leading-relaxed">
              <p>
                Each destination caters to distinct trekking preferences:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Summit Views &amp; Sunrises:</strong> Kalsubai and Harishchandragad offer breathtaking cloud inversions above 1,400 meters.
                </li>
                <li>
                  <strong>Adrenaline &amp; Rock Stairs:</strong> Harihar Fort and Kalavantin Durg feature thrilling stone-carved steps requiring firm three-point contact.
                </li>
                <li>
                  <strong>Lush Waterfalls &amp; Forests:</strong> Devkund and the waterfall staircase of Visapur Fort provide refreshing monsoon streams.
                </li>
              </ul>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onNavigateDestinations}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183D32] hover:text-[#647A52] underline cursor-pointer"
                >
                  <span>Explore all 16 trekking places in Maharashtra</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigateArticle('trekking-safety-guide')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#806B50] hover:text-[#183D32] underline cursor-pointer"
                >
                  <span>Read the Beginner Safety Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>

          {/* Question 2 */}
          <article className="p-6 sm:p-8 bg-[#F5F3EA] rounded-2xl border border-[#A8B69A]/40 shadow-xs">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#647A52] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#647A52] block mb-1">
                  Season &amp; Planning
                </span>
                {/* H2 Question */}
                <h2 className="font-serif text-2xl sm:text-3xl text-[#183D32] font-semibold leading-snug">
                  When is the best time to go trekking in Maharashtra?
                </h2>
              </div>
            </div>

            {/* Direct, concise answer immediately below the H2 */}
            <p className="text-base text-[#183D32] font-medium leading-relaxed pl-11 mb-4">
              The best time to go trekking in Maharashtra is between July and February, divided into two distinct seasons: the monsoon season (July to September) and the post-monsoon winter season (October to February). The monsoon brings vibrant greenery, rushing waterfalls, and cool mist ideal for scenic day treks like Visapur and Devkund, while the winter months provide dry rock surfaces, crisp temperatures (12°C to 28°C), and crystal-clear skies ideal for technical fort ascents, camping, and panoramic summit views.
            </p>

            {/* Supporting Details and Internal Links */}
            <div className="pl-11 pt-2 space-y-3 text-sm text-[#252C26]/85 font-light leading-relaxed">
              <p>
                Choosing the right season depends on your planned trail:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <strong>Monsoon (July – September):</strong> Best for lush nature trails, stream crossings, and waterfall hikes. Requires waterproof daypacks, rain ponchos, and high-traction footwear for slippery basalt rocks.
                </li>
                <li>
                  <strong>Post-Monsoon &amp; Winter (October – February):</strong> Safest for technical rock climbs like Alang-Madan-Kulang (AMK), canyon traverses like Sandhan Valley, and night treks to Kalsubai.
                </li>
                <li>
                  <strong>Summer (March – May):</strong> Daytime temperatures frequently exceed 36°C; trekking is generally discouraged except for early morning fort walks or pre-monsoon firefly viewing at Rajmachi in late May.
                </li>
              </ul>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigateArticle('waterfalls-in-maharashtra')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183D32] hover:text-[#647A52] underline cursor-pointer"
                >
                  <span>Read our Monsoon Waterfalls &amp; Nature Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
