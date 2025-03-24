import {useRouter} from "next/router";
export default function Page() {
    const { query } = useRouter();

    return <h1>검색 결과 : {query.q}</h1>;
}