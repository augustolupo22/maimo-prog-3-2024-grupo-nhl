import Recipe from "@/app/components/Recipe/Recipe";

export default function page({ params }) {
    const { id } = params;
    return <Recipe id={id} />;
}