import React from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const ScholarshipStep = () => {
  const steps = [
    {
      name: "Isi Form",
    },
    {
      name: "Seleksi Porfolio dan Profile",
    },
    {
      name: "Tanda Tangan Kontrak",
    },
    {
      name: "Pembayaran Deposit Fee",
    },
    {
      name: "Onboarding",
    },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <h2 className="mt-4 text-center text-3xl tracking-tight">Tahapan</h2>
      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={classNames(stepIdx !== steps.length - 1 ? "pb-10" : "", "relative")}
              >
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-primary"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary group-hover:bg-teal-500">
                      {stepIdx + 1}
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium">{step.name}</span>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};
