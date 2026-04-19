"use client";

import CodeBlock from "@/components/CodeBlock";
import LearningLayout from "@/components/LearningLayout";
import LessonNavigation from "@/components/LessonNavigation";

export default function FormsPage() {
  const basicForm = `<form>
  <input type="text" placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>`;

  const inputTypes = `<input type="text" placeholder="Text" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />`;

  const labelsExample = `<label for="email">Email:</label>
<input id="email" type="email" />`;

  const fullForm = `<form>
  <label>Name:</label>
  <input type="text" required />

  <label>Email:</label>
  <input type="email" required />

  <label>Password:</label>
  <input type="password" required />

  <button type="submit">Register</button>
</form>`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-amber-50 to-cyan-100 p-6">
    <LearningLayout>    
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow space-y-10">

        <h1 className="text-3xl font-bold">HTML Forms</h1>

        {/* BASIC FORM */}
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Basic Form</h2>

          <CodeBlock code={basicForm} />
          
          <p className="mt-4 text-gray-700">
            Forms are used to collect user input.
          </p>
        </section>

        {/* INPUT TYPES */}
        <section>
          <h2 className="text-xl font-semibold mb-3">2. Input Types</h2>

          <CodeBlock code={inputTypes} />

          <p className="mt-4 text-gray-700">
            Different input types help validate user data.
          </p>
        </section>

        {/* LABELS */}
        <section>
          <h2 className="text-xl font-semibold mb-3">3. Labels</h2>

          <CodeBlock code={labelsExample} />

          <p className="mt-4 text-gray-700">
            Labels improve accessibility and usability.
          </p>
        </section>

        {/* FULL FORM */}
        <section>
          <h2 className="text-xl font-semibold mb-3">4. Complete Example</h2>

          <CodeBlock code={fullForm} />

          <p className="mt-4 text-gray-700">
            This is a real-world registration form.
          </p>
        </section>

        {/* VALIDATION */}
        <section>
          <h2 className="text-xl font-semibold mb-3">5. Validation</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><b>required</b> → field must be filled</li>
            <li><b>type=&quot;email&quot;</b> → validates email format</li>
            <li><b>type=&quot;password&quot;</b> → hides input</li>
          </ul>
        </section>

        {/* BEST PRACTICES */}
        <section>
          <h2 className="text-xl font-semibold mb-3">6. Best Practices</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Always use labels</li>
            <li>Validate inputs</li>
            <li>Keep forms simple</li>
            <li>Provide clear placeholders</li>
          </ul>
        </section>        
      </div>
      <LessonNavigation />
      </LearningLayout>
    </main>
  );
}