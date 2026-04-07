import useFetch from './useFetch';

function Employees(){
  const {data: names, loading, error} = useFetch('https://jsonplaceholder.typicode.com/todos')

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>; 
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {names && names.map((ele) => (
        <div key={ele.id}>
          <p>{ele.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Employees;
