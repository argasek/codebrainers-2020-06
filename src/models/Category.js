class Category {

    id = undefined;
    url = "";
    name = "";
    slug = "";

    fromPlain(item) {
        this.id = item.id;
        this.name = item.name;
        this.url = item.url;
        this.slug = item.slug;
    }

}

export default Category;