import { fetchPost } from "../../hooks/fetchPost";
import Spinner from "../Spinner";

const ListPost = () => {

  const { data, loading, error } = fetchPost(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <Spinner/>;
  }

  if (error) return <p>Ocorreu um erro ao buscar os dados da API</p>;
  console.log(data);

  return (
    <section>
      <div
        className="flex w-full bg-slate-100 justify-center gap-10 flex-col items-center py-10 h-full"
      >
        {data &&
          data != null &&
          data.map((item) => {
            return (
              <div className="flex flex-col bg-slate-200 rounded-2xl shadow-lg p-5 w-[80vw] md:max-h-[200px] md:max-w-[400px]" key={item.id}>
                <h1 className="flex font-semibold text-lg leading-1 mb-5">{item.title}</h1>
                <p className="flex text-sm">{item.body}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ListPost;
