import styled from 'styled-components';

import components from '../.docs/components.json';
import foundations from '../.docs/foundations.json';

const data = [...components, ...foundations];
const colNames = ['name', 'description', 'type', 'value', 'defaultValue'];

type PArgstabel = {
    className?: string;
    componentName: string;
};

const ArgumentsTableBase = (props: PArgstabel): JSX.Element | null => {
    const componentData = data.find((x) => x.displayName === props.componentName);

    if (!componentData || !componentData.props) {
        return null;
    }

    const componentProperties = Object.keys(componentData.props);

    return (
        <table className={props.className}>
            <thead>
                <tr>
                    {colNames.map((name) => (
                        <th key={`props-header_${name}`}>{name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {componentProperties.map((property) => (
                    <tr>
                        <td>{componentData.props[property].name}</td>
                        <td>{componentData.props[property].description}</td>
                        <td>
                            <pre>{componentData.props[property].type.raw}</pre>
                        </td>
                        <td>
                            {componentData.props[property].type.value.map((value) => (
                                <pre>{value.value}</pre>
                            ))}
                        </td>
                        <td>{componentData.props[property].defaultValue.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const ArgumentsTable = styled(ArgumentsTableBase)`
    width: 100%;
    td {
        padding: 12px;
    }
`;

export default ArgumentsTable;
