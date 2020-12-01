import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";
import withCategories from 'components/withCategories';

class Categories extends React.PureComponent {

  componentDidMount() {
    this.props.fetchCategories();
  }

  categoriesMapper = (item, index, arr) => (
    <CategoryItem
      category={item}
      label='category'
      key={index}
      isLastItem={arr.length - 1 === index}
      index={index}
    />
  )

  render() {
    const {
      categories,
      categoriesInProgress,
      categoriesSuccess,
    } = this.props;

    return (
      <Card>
        <CardBody>
          <div className="app-container">
            <InProgress inProgress={categoriesInProgress} />
            {
              categoriesSuccess === false &&
              <p>Nie udało się pobrać Kategorii</p>
            }
            {
              categoriesSuccess
              &&
              <ListGroup className="categories">
                {
                  categories.map(this.categoriesMapper)
                }
              </ListGroup>
            }
          </div>
        </CardBody>
      </Card>
    )
  }
}


export default withCategories(Categories);