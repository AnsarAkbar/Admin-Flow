import React from 'react';
import Dashboard from '../dashboard/Dashboard';

const Documentation = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-900">Documentation</h1>
        <p className="text-lg text-gray-600">Learn how to use our components, API, and more!</p>
      </header>

      {/* Table of Contents */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
          <li><a href="#getting-started" className="text-blue-600 hover:underline">Getting Started</a></li>
          <li><a href="#installation" className="text-blue-600 hover:underline">Installation</a></li>
          <li><a href="#usage" className="text-blue-600 hover:underline">Usage</a></li>
          <li><a href="#api-reference" className="text-blue-600 hover:underline">API Reference</a></li>
        </ul>
      </section>

      {/* Section 1: Getting Started */}
      <section id="getting-started" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Getting Started</h2>
        <p className="text-lg text-gray-700">
          To get started, you first need to install the required dependencies. Follow the steps below to set up the project.
        </p>
        <pre className="bg-gray-800 text-white p-4 mt-4 rounded-md">
          <code>
            npm install my-library
          </code>
        </pre>
      </section>

      {/* Section 2: Installation */}
      <section id="installation" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Installation</h2>
        <p className="text-lg text-gray-700">
          After installing the package, you can import and use the components in your project.
        </p>
        <pre className="bg-gray-800 text-white p-4 mt-4 rounded-md">
          <code>
            import "Dashboard, Team, Projects, calander" from 'my-library';
          </code>
        </pre>
      </section>

      {/* Section 3: Usage */}
      <section id="usage" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Usage</h2>
        <p className="text-lg text-gray-700">
          Here’s an example of how to use the components in your project.
        </p>
        <pre className="bg-gray-800 text-white p-4 mt-4 rounded-md">
          <code>
            &lt;ComponentName prop1="value" prop2="value"&gt;
            &lt;/ComponentName&gt;
          </code>
        </pre>
      </section>

      {/* Section 4: API Reference */}
      <section id="api-reference" className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">API Reference</h2>
        <p className="text-lg text-gray-700">
          Here are some of the main API methods you can use.
        </p>
        <div className="space-y-4 mt-4">
          <div className="border p-4 rounded-md bg-white">
            <h3 className="text-2xl font-semibold text-gray-800">Method 1: <span className="text-blue-600">functionName</span></h3>
            <p className="text-lg text-gray-700">
              This method is used to perform XYZ action. It takes two arguments and returns a value.
            </p>
            <pre className="bg-gray-800 text-white p-4 mt-4 rounded-md">
              <code>
                functionName(arg1, arg2);
              </code>
            </pre>
          </div>

          <div className="border p-4 rounded-md bg-white">
            <h3 className="text-2xl font-semibold text-gray-800">Method 2: <span className="text-blue-600">anotherFunction</span></h3>
            <p className="text-lg text-gray-700">
              This method does something else and takes no arguments.
            </p>
            <pre className="bg-gray-800 text-white p-4 mt-4 rounded-md">
              <code>
                anotherFunction();
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
