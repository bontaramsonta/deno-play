import inputJson from './input.json' assert { type: 'json' };
import lodash from 'npm:lodash';
const fields = ['Groupings', 'Type5', 'Type4', 'Type3'] as const;
type Field = typeof fields[number];
type Input = {
    id: number;
    year: number;
    Type: string;
    Groupings: string;
    Type5: string;
    Type4: string;
    Type3: string;
    Type2: string;
    Region: string;
    Currency: string;
    month: string;
    value: number;
    NewValue: string;
};

type Output = {
    sno: string;
    id: string;
    category: string;
    value: number;
    children: Output[];
};

function groupDataBasedonFields(
    inputJson: Input[],
    fields: Field[],
    key = 'main',
    _parentId = 'main',
    _currentField = 0,
): Output {
    const field = fields[_currentField];
    const groupedData = lodash.groupBy(inputJson, field);
    const result = [];
    for (let i = 0; i < Object.keys(groupedData).length; i++) {
        const key = Object.keys(groupedData)[i];
        const value = groupedData[key];
        const output: Output = {
            sno: `${_parentId}.${key}.${i + 1}`,
            id: key,
            category: field,
            value: lodash.sumBy(value, 'value'),
            children: [],
        };
        if (_currentField < fields.length - 1) {
            output.children.push(
                groupDataBasedonFields(
                    value,
                    fields,
                    key,
                    `${_parentId}.${key}.${i + 1}`,
                    _currentField + 1,
                ),
            );
        }
        result.push(output);
    }
    return {
        sno: _parentId,
        id: key,
        category: field,
        value: lodash.sumBy(result, 'value'),
        children: result,
    };
}

if (import.meta.main) {
    const result = groupDataBasedonFields(inputJson, fields);
    console.log(JSON.stringify(result, null, 2));
    // console.log(JSON.stringify(groupedData, null, 2));
}
