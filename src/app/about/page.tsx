import React from "react";

export default function Page() {
  return (
    <div className="mx-auto max-w-sm pb-32 lg:max-w-7xl lg:px-6">
      <h2 className="mt-12 text-center text-4xl font-bold">About</h2>
      <div className="space-y-4 pt-6 text-lg text-gray-300">
        <p>
          partna.tech develops data talents, provides data talents, and builds & does research about
          data engineering and data science best-practices in Indonesia. we assemble scalable
          infrastructure and environment for data talents to practice their skills.
        </p>
        <p>
          With collective experience in Data Science, Data Engineering, and Artificial Intelligence,
          our team ensures you will find the best data engineers the state-of-the-art solution
          related to data engineering practice and problems.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="mb-1 text-2xl">Our Vision</h3>
        <p className="text-lg text-gray-300">
          To tackle the practical experience gap of data talents, providing a &quot;playing
          ground&quot; and the best mentors in the field.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="mb-1 text-2xl">Our Mission</h3>
        <p className="text-lg text-gray-300">
          To build practical infrastructures for data talents and potential data talents for
          practicing and creating valuable portfolios, we also ensure potential data talents achieve
          their career goals with end-to-end practice.
        </p>
      </div>
    </div>
  );
}
