const Page = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <h1>Example page {id}</h1>
    )
}

export default Page;