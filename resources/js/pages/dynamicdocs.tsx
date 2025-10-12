
import React, { useEffect, useRef } from 'react';
import { usePage, router } from '@inertiajs/react';

export default function Documentation({ docHtml, docPath }) {
    const contentRef = useRef(null);

    // 1. Initial HTML Rendering
    // React's equivalent of innerHTML
    const renderedHtml = { __html: docHtml };

    // 2. Link Interception Logic
    useEffect(() => {
        const contentDiv = contentRef.current;
        if (!contentDiv) return;

        const handleLinkClick = (event) => {
            const target = event.target.closest('a');

            // Only intercept links within the rendered HTML
            if (target && contentDiv.contains(target)) {
                const href = target.getAttribute('href');

                // Check if it's a relative TypeDoc link (e.g., index.html, classes/myclass.html)
                if (href && (href.endsWith('.html') || !href.includes('://'))) {
                    event.preventDefault();

                    // Convert the TypeDoc link to an Inertia URL segment
                    // e.g., 'classes/MyClass.html' -> '/docs/classes/MyClass'
                    const newPath = href.replace(/\.html$/, '');

                    // Use Inertia's router to navigate
                    router.get(`/docs/${newPath}`, {}, {
                        // Crucial for keeping the page smooth
                        preserveScroll: true,
                        preserveState: true,
                    });
                }
            }
        };

        // Attach the event listener to the parent div
        contentDiv.addEventListener('click', handleLinkClick);

        // Cleanup the listener when the component unmounts
        return () => {
            contentDiv.removeEventListener('click', handleLinkClick);
        };
    }, [docHtml, docPath]); // Re-run effect if the documentation content/path changes

    // 3. Render the content
    return (
        <div className="documentation-container p-6">
            <div
                ref={contentRef}
                dangerouslySetInnerHTML={renderedHtml}
                // NOTE: You will need to inject/apply the TypeDoc CSS here
            />
        </div>
    );
}