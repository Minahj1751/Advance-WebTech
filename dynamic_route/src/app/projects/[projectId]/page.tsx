interface Params {
    projectId: string;
}

const Page = ({ params }: { params: Params }) => {
    return <div>Project Id: {params.projectId}</div>;
};

export default Page;
