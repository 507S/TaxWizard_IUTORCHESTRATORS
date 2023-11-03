import { useEffect, useState } from "react";
import { Chart, initTE } from "tw-elements";

const DataVisualizationSidebar = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [lastFiveYears, setLastFiveYears] = useState([]);

  useEffect(() => {
    // Initialize the Traffic Chart
    initTE({ Chart });

    // Calculate the last five years starting from the current year
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, index) => {
      return (currentYear - index).toString();
    });
    setLastFiveYears(years);
  }, []);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card p-4 rounded-xl bg-slate-700">
              <div className="text-center">
                <button
                  id="dropdownDefaultButton"
                  onClick={toggleDropdown}
                  className="btn btn-primary"
                  type="button"
                >
                  Choose Year
                </button>

                {isDropdownOpen && (
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {selectedYear}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {lastFiveYears.map((year) => (
                        <button
                          key={year}
                          className="dropdown-item"
                          value={year}
                          onClick={handleYearChange}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-white text-lg">Paid: $1207</p>
              <p className="text-white text-lg">Owed: $208</p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="mx-auto w-75 overflow-hidden pt-8">
              <canvas
                data-te-chart="line"
                data-te-dataset-label="Tax"
                data-te-labels="['2017','2018', '2019' , '2020' , '2021' , '2022' , '2023' ]"
                data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationSidebar;
