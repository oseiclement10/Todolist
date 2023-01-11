const Card = ({title,type,value}) => {

    return (
        <div class="col-span-1 flex flex-col bg-white shadow-md p-4 space-y-3">
              <h2 class="mb-2 font-bold text-1xl">
                NUMBER OF {title}
              </h2>
              <p class="text-md text-justify">
                Total {type}
              </p>
              <h2 class="mb-2 font-bold-600 text-sky-800 text-4xl">
               {value.toLocaleString()}
              </h2>
              <div class="flex flex-wrap mt-auto text-blue-600 pt-3 text-xs underline">
                <Link class="mr-2 mb-2" to={"#"}>View Details</Link>
              </div>
             </div>
    )
}

export default Card;