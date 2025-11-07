// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Maintain an explicit order so Knowledge Base flows into Methods, Applications, and resources.
  mainSidebar: [
    {
      type: 'category',
      label: 'Knowledge Base',
      collapsed: false,
      items: [
        'knowledge-base/overview',
        'knowledge-base/landscape',
        'knowledge-base/core-tasks',
        'knowledge-base/representation-first',
      ],
    },
    {
      type: 'category',
      label: 'Methods & Concepts',
      collapsed: false,
      items: [
        'methods-concepts/overview',
        'methods-concepts/classical-representations',
        'methods-concepts/symbolic-frequency',
        'methods-concepts/decomposition-trend',
        'methods-concepts/modern-deep-models',
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      collapsed: false,
      items: [
        'applications/overview',
        'applications/health-aging',
        'applications/industrial-manufacturing',
        'applications/finance-risk',
        'applications/iot-sensor-networks',
      ],
    },
    {
      type: 'category',
      label: 'Learning Paths',
      collapsed: false,
      items: [
        'learning-paths/overview',
        'learning-paths/beginners',
        'learning-paths/cross-disciplinary',
        'learning-paths/engineering-pipelines',
      ],
    },
    {
      type: 'category',
      label: 'Tools & Starter Kits',
      collapsed: false,
      items: [
        'tools-starter-kits/overview',
        'tools-starter-kits/libraries-tooling',
        'tools-starter-kits/starter-pipelines',
        'tools-starter-kits/visualization-diagnostics',
      ],
    },
    {
      type: 'category',
      label: 'Reading Room',
      collapsed: false,
      items: [
        'reading-room/overview',
        'reading-room/foundations',
        'reading-room/recent-developments',
        'reading-room/by-domain',
      ],
    },
  ],
};

export default sidebars;
