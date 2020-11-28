import { Card, CardBody, ListGroup } from "reactstrap";
import React from "react";
import CategoryItem from "components/categories/CategoryItem";
import InProgress from "components/shared/InProgress";


class Categories extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      plantsInProgress: false,
      successCategories: undefined,
      categories: [],
    };
  }


  render() {

    const {
      categories,
      successCategories,
      categoriesInProgress,
    } = this.props;


    return (
      <Card>
        <CardBody>
          <div className="app-container">
            <InProgress plantsInProgress={ categoriesInProgress }/>
            {
              successCategories === false &&
              <p>Nie udało się pobrać Kategorii</p>
            }
            {
              successCategories &&
              <ListGroup className="categories">
                {
                  categories.map((item, index, arr) =>
                    <CategoryItem
                      category={ item }
                      label='category'
                      key={ index }
                      isLastItem={ arr.length - 1 === index }
                      index={ index }
                    />
                  )
                }
              </ListGroup>
            }
          </div>
        </CardBody>
      </Card>
    )
  }
}


export default Categories;