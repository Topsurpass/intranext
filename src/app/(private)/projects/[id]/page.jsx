export default function Page({ params }) {
    const { id } = params;
    return (
        <section className="p-5">
            <p>This is project page for project with id number {id}</p>
        </section>
    );
}
