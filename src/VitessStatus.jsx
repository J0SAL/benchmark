import React, { useState, useEffect } from "react";
const Status = () => {
  const [queue, setQueue] = useState([]);
  const [executions, setExecutions] = useState([]);

  useEffect(() => {
    console.log("calling");
    fetch("assets/json/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        setQueue(data.queue);
        setExecutions(data.executions);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return (
    <div style={{ paddingTop: "55px" }}>
      <section className="py-4">
        <div className="container">
          <div className="card rounded">
            <h2 className="text-center card-header">Status</h2>
          </div>
        </div>
      </section>
      <div className="container-xxl">
        {queue && (
          <div className="card rounded mb-3">
            <h4 className="card-header text-center">Execution Queue</h4>
            <table className="table table-hover table-sm">
              <thead>
                <tr style={{ borderTopStyle: "hidden" }}>
                  <th scope="col" className="text-center">
                    SHA
                  </th>
                  <th scope="col" className="text-center">
                    Source
                  </th>
                  <th scope="col" className="text-center">
                    Type
                  </th>
                  <th scope="col" className="text-center">
                    Pull Request
                  </th>
                  <th scope="col" className="text-center">
                    Planner Version
                  </th>
                </tr>
              </thead>
              <tbody>
                {queue.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/vitessio/vitess/commit/{item.sha}"
                      >
                        {item.sha}
                      </a>
                    </td>
                    <td className="text-center">{item.source}</td>
                    <td className="text-center">{item.benchmarkType}</td>
                    <td className="text-center">
                      {item.pullNb > 0 ? (
                        <a href="https://github.com/vitessio/vitess/pull/{item.pullNb}">
                          {item.pullNb}
                        </a>
                      ) : (
                        item.pullNb
                      )}
                    </td>
                    <td className="text-center">{item.plannerVersion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {executions && (
          <div className="card rounded mb-3">
            <h4 className="card-header text-center">Previous Executions</h4>
            <div className="card-body">
              <table className="table table-hover table-sm">
                <thead>
                  <tr style={{ borderTopStyle: "hidden" }}>
                    <th scope="col" className="text-center">
                      UUID
                    </th>
                    <th scope="col" className="text-center">
                      SHA
                    </th>
                    <th scope="col" className="text-center">
                      Source
                    </th>
                    <th scope="col" className="text-center">
                      Started
                    </th>
                    <th scope="col" className="text-center">
                      Finished
                    </th>
                    <th scope="col" className="text-center">
                      Type
                    </th>
                    <th scope="col" className="text-center">
                      Pull Request
                    </th>
                    <th scope="col" className="text-center">
                      Planner
                    </th>
                    <th scope="col" className="text-center">
                      Go Version
                    </th>
                    <th scope="col" className="text-center">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {executions.map((item, id) => (
                    <tr key={id}>
                      <td className="text-center">{item.uuid}</td>
                      <td className="text-center">{item.sha}</td>
                      <td className="text-center">{item.source}</td>
                      <td className="text-center">{item.startedAt}</td>
                      <td className="text-center">{item.finishedAt}</td>
                      <td className="text-center">{item.type}</td>
                      <td className="text-center">
                        {item.pullNb > 0 ? (
                          <a href="https://github.com/vitessio/vitess/pull/{item.pullNb}">
                            {item.pullNb}
                          </a>
                        ) : (
                          item.pullNb
                        )}
                      </td>
                      <td className="text-center">
                        {item.vtgatePlannerVersion}
                      </td>
                      <td className="text-center">{item.golangVersion}</td>
                      <td className="text-center">
                        {(() => {
                          if (item.status === "finished") {
                            return (
                              <span
                                style={{
                                  backgroundColor: "#28a745",
                                  padding: "5px",
                                  color: "white",
                                  borderRadius: "10rem",
                                  fontSize: "75%"
                                }}
                              >
                                {item.status}
                              </span>
                            );
                          } else if (item.status === "failed") {
                            return (
                              <span className="badge badge-pill badge-danger">
                                {item.status}
                              </span>
                            );
                          } else if (item.status === "started") {
                            return (
                              <span
                                style={{
                                  backgroundColor: "#007bff",
                                  padding: "5px",
                                  color: "white",
                                  borderRadius: "10rem",
                                  fontSize: "75%"
                                }}
                              >
                                {item.status}
                              </span>
                            );
                          } else {
                            return (
                              <span className="badge badge-pill badge-secondary">
                                {item.status}
                              </span>
                            );
                          }
                        })()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;
