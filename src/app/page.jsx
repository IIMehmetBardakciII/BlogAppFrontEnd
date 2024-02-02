import {CategoryList,Featured,CardList, Menu} from '../components'


import Link from "next/link";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>

      <Featured />
      <CategoryList />

      <div className="flex gap-[50px]">
        <CardList page={page} />
        <Menu />
      </div>
      
    </div>
  );
}
