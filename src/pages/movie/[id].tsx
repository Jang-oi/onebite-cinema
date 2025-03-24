import { useRouter } from "next/router";

export default function Page() {

    const { query } = useRouter();

    return <h1>{query.id} 영화 상세 페이지</h1>
}