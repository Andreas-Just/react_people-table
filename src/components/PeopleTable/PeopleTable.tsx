import React from 'react';
import cn from 'classnames';
import { Icon, Table } from 'semantic-ui-react';
import TableCells from '../TableCells';
import Paginator from '../Paginator';
import './PeopleTable.scss';

type Props = {
  path: string;
  page: number;
  perPage: number;
  totalPages: number;
  sortedBy: string;
  isSortedAsc: boolean;
  people: Person[];
  tableHeaders: TableHeader[];
  onSortTable: (field: string) => void;
  onSelectPerson: (field: string, person: Person) => void;
  onSelectPage: (_: React.SyntheticEvent, data: object) => void;
  onSelectPerPage: (_: React.SyntheticEvent, data: object) => void;
};

const PeopleTable: React.FC<Props> = React.memo(
  ({
    path,
    page,
    perPage,
    totalPages,
    people,
    sortedBy,
    isSortedAsc,
    tableHeaders,
    onSortTable,
    onSelectPerson,
    onSelectPage,
    onSelectPerPage,
  }) => {
    return (
      <Table
        className="PeopleTable"
        fixed
        basic
        celled
        color="teal"
        inverted
      >
        <Table.Header className="PeopleTable-TableHeader">
          <Table.Row className="PeopleTable-TableRow">
            {tableHeaders.map(({ name, code }) => (
              <Table.HeaderCell
                key={code}
                className={cn({
                  'PeopleTable-HeaderCell': true,
                  [`PeopleTable-HeaderCell_${code}`]: true,
                })}
                onClick={() => onSortTable(code)}
              >
                {sortedBy === code && (
                  <Icon
                    name={
                      isSortedAsc ? 'arrow circle down' : 'arrow circle up'
                    }
                    className="PeopleTable-Icon"
                  />
                )}
                {name}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body className="PeopleTable-TableBody">
          {people.map(person => (
            <Table.Row
              key={person.id}
              active={person.slug === path}
              className={cn({
                'PeopleTable-TableRow': true,
                'PeopleTable-TableRow_male': person.sex === 'm',
                'PeopleTable-TableRow_female': person.sex === 'f',
              })}
            >
              <TableCells
                person={person}
                tableHeaders={tableHeaders}
                onSelect={onSelectPerson}
              />
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer className="PeopleTable-TableFooter">
          <Table.Row className="PeopleTable-TableRow">
            <Paginator
              page={page}
              perPage={perPage}
              totalPages={totalPages}
              onSelectPage={onSelectPage}
              onSelectPerPage={onSelectPerPage}
            />
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  },
);


export default PeopleTable;
