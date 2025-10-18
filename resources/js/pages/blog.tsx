import "../../css/app.css";

import BlogLayout from './blog/blog-layout';
import { blog } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react'; 
import BlogArticles from './blog/articles/blog-articles';
  
const breadcrumbs: BreadcrumbItem[] = [
    { 
        title: 'Blog',
        href: blog().url,
    },
];

function Blog() {
  return (
    <BlogLayout breadcrumbs={breadcrumbs}>
      <Head title="Blog" />
      <BlogArticles />
      
    </BlogLayout>
  );
}

export default Blog;