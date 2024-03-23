import React from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const ScholarshipStep = () => {
  const steps = [
    {
      name: "Isi Form",
      status: "complete",
    },
    {
      name: "Seleksi Porfolio dan Profile",
      status: "complete",
    },
    {
      name: "Tanda Tangan Kontrak",
      status: "complete",
    },
    {
      name: "Pembayaran Deposit Fee",
      status: "complete",
    },
    {
      name: "Onboading",
      status: "complete",
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
                {step.status === "complete" ? (
                  <>
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
                  </>
                ) : (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="group relative flex items-start">
                      <span className="flex h-9 items-center" aria-hidden="true">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-gray-500">{step.name}</span>
                      </span>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};
