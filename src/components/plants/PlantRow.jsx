import React from 'react';
import PropTypes from 'prop-types';
import './Plant.scss';
import Plant from 'models/Plant';
import Categories from "../categories/Categories";
import { plantDifficultyLevels } from 'constants/PlantConstants';

class PlantRow extends React.PureComponent {

  getDifficultyLabel(difficulty) {
    let result = [];
    for (let i = 0; i < difficulty; i++) {
      result.push(<img key={ i } className='mr-1' width='16'
                       src='https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f1ea.png'/>);
    }
    return result;
  }

  formatIntervalAsString(interval) {
    const days = Math.round(interval / (24 * 60 * 60));
    let hours = Math.round(interval % (24 * 3600));
    hours = Math.floor(hours / 3600)
    let minutes = Math.round(interval % (3600));
    minutes = Math.floor(minutes / 60);
    let seconds = Math.round(interval % 60);
    seconds = Math.floor(seconds / 60)

    return `Day(s): ${ days }, hour(s): ${ hours }, minute(s): ${ minutes }, second(s): ${ seconds } - interval ${ interval }`

  }

  getCategoryLabel(categoryId) {
    const { categories } = this.props;
    const category = categories.find(category => category.id === categoryId);
    // return category !== undefined? category.name: "?";
    return category.name;
  }

  render() {


    /**
     * @type Plant
     */
    const plant = this.props.plant;
    const { delayFetch, categories } = this.props;
    const difficultyLabel = this.getDifficultyLabel(plant.difficulty);
    const wateringIntervalLabel = this.formatIntervalAsString(plant.wateringInterval)
    console.log(categories);
    const categoryLabel = this.getCategoryLabel(plant.categoryId);

    return (

      <tr>
        {/*<td>{ plant.id }</td>*/ }
        <td>{ plant.name }</td>
        <td>{ categoryLabel }</td>
        <td>{ wateringIntervalLabel }</td>
        <td>{ plant.fertilizingInterval }</td>
        <td>{ plant.requiredExposure }</td>
        <td>{ plant.requiredHumidity }</td>
        <td>{ plant.requiredTemperature }</td>
        <td>{ difficultyLabel }</td>
        {/*<td>{ plant.lastWatered }</td>*/ }
        {/*<td>{ plant.lastFertilized }</td>*/ }
      </tr>
    );
  }

}

PlantRow.propTypes = {
  plant: PropTypes.instanceOf(Plant).isRequired,
};

export default PlantRow;