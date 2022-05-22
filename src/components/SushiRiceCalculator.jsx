import React, { useEffect, useState } from 'react';

import { Center, Flow } from '../utilities/utilities';

import classes from './SushiRiceCalculator.module.css';

const SushiRiceCalculator = () => {
    const [people, setPeople] = useState(1);
    const [units, setUnits] = useState('metric');
    const [hungriness, setHungriness] = useState('medium');
    const [quantities, setQuantities] = useState({
        rice: '150 g',
        water: '200 ml',
        riceVinegar: '27 ml',
        sugar: '5g',
        salt: '2g',
    });

    const peopleChangeHandler = (e) => setPeople(e.target.value);
    const unitsChangeHandler = (e) => setUnits(e.target.value);
    const hungrinessChangeHandler = (e) => setHungriness(e.target.value);

    useEffect(() => {
        let hungrinessRatios;
        switch (hungriness) {
            case 'high':
                hungrinessRatios = {
                    rice: 1.5,
                    water: 1.5,
                    riceVinegar: 1.48,
                    sugar: 1.6,
                    salt: 1.5,
                };
                break;
            case 'low':
                hungrinessRatios = {
                    rice: 0.5,
                    water: 0.5,
                    riceVinegar: 0.52,
                    sugar: 0.4,
                    salt: 1,
                };
                break;
            case 'medium':
                hungrinessRatios = {
                    rice: 1,
                    water: 1,
                    riceVinegar: 1,
                    sugar: 1,
                    salt: 1,
                };
                break;
            default:
                throw new Error('Hungriness not detected!');
        }

        switch (units) {
            case 'metric':
                setQuantities({
                    rice: people * 150 * hungrinessRatios.rice + 'g',
                    water: people * 200 * hungrinessRatios.water + 'ml',
                    riceVinegar:
                        people * 27 * hungrinessRatios.riceVinegar + 'g',
                    sugar: people * 5 * hungrinessRatios.sugar + 'g',
                    salt: people * 2 * hungrinessRatios.salt + 'g',
                });
                break;
            case 'cups':
                setQuantities({
                    rice: people * 0.7 * hungrinessRatios.rice + ' cup',
                    water: people * 0.8 * hungrinessRatios.water + ' cup',
                    riceVinegar:
                        people * 1.8 * hungrinessRatios.riceVinegar +
                        ' tablespoon',
                    sugar: people * 0.4 * hungrinessRatios.sugar + ' tablespoon',
                    salt: people * 0.4 * hungrinessRatios.salt + ' teaspoon',
                });
                break;
            default:
                throw new Error('Unit not detected!');
        }
    }, [
        people,
        units,
        hungriness
    ]);

    return (
        <Center>
            <div className={classes['sushi-rice-calculator']}>
                <Flow>
                    <form id="peopleForm" className={classes.peopleForm}>
                        <label htmlFor="people">How many people?</label>
                        <input
                            id="people"
                            type="number"
                            min="1"
                            defaultValue="1"
                            required
                            onChange={peopleChangeHandler}
                        />
                    </form>
                    <div className={classes.quantities}>
                        <div>
                            <span>
                                {quantities.rice}
                            </span>
                            <span>Rice</span>
                        </div>
                        <div>
                            <span>
                                {quantities.water}
                            </span>
                            <span>Water</span>
                        </div>
                        <div>
                            <span>{quantities.riceVinegar}</span>
                            <span>Rice Vinegar</span>
                        </div>
                        <div>
                            <span>{quantities.sugar}</span>
                            <span>Sugar</span>
                        </div>
                        <div>
                            <span>{quantities.salt}</span>
                            <span>Salt</span>
                        </div>
                    </div>
                    <form id="unitsForm" className={classes.unitsForm}>
                        <label htmlFor="units">Units:</label>
                        <select
                            name="units"
                            id="units"
                            defaultValue="metric"
                            onChange={unitsChangeHandler}
                        >
                            <option value="metric">Metric</option>
                            <option value="cups">Cups</option>
                        </select>
                    </form>
                </Flow>
            </div>
        </Center>
    );
};

export default SushiRiceCalculator;
