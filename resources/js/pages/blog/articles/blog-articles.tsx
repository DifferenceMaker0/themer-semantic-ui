import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
// import BlogLayout from '../blog-layout';  

export default function BlogArticles() {
  return ( 
    <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/bg-blocks-grid-purple.jpeg)' }}>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/thumbnail.png)' }}>
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <h3 className="text-white text-2xl font-bold">Article 1</h3>
                      </div>
                  </div> 
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/maze.jpeg)' }}>
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <h3 className="text-white text-2xl font-bold">Article 2</h3>
                      </div>
                  </div> 
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/casino.jpeg)' }}>
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <h3 className="text-white text-2xl font-bold">Article 3</h3>
                      </div>
                  </div> 
            </div>
        </div>
          <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/metal-floor.jpeg)' }}>
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">Main Article</h3>
                  </div>
              </div> 
        </div>
    </div>
  );
}