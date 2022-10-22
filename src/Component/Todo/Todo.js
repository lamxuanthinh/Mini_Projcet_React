import { useState } from "react"; // phải import hook cần dùng vào

const Todo = () => {
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("jobs")) ?? [];
    // chuyển chuỗi thành mảng  ?? là chọn [] khi jobs là null hay undefine
  });
  const [works, setWorks] = useState();
  function addWorks() {
    setJobs((prev) => {
      const newJob = [...prev, works];
      const jsonJob = JSON.stringify(newJob); // chuyển mảng thành chuỗi
      localStorage.setItem("jobs", jsonJob);
      return newJob;
    });
    setWorks("");
  }
  const deleteWorks = (index) => {
    setJobs(() => {
      const newJob = jobs.filter((item) => item !== jobs[index]); // lọc mảng trả lại mảng mới
      const jsonJob = JSON.stringify(newJob);
      localStorage.setItem("jobs", jsonJob);
      return newJob;
    });
  };

  return (
    <div>
      <input
        type="text"
        value={works}
        onChange={(e) => setWorks(e.target.value)}
      />
      <button onClick={addWorks}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li
            key={index}
            onDoubleClick={() => {
              deleteWorks(index);
            }}
          >
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
