/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {FlatList, Text} from 'react-native';

it('renders correctly', () => {
  const tasks = [
    {id: 'AAB', title: 'Create Mobile App'},
    {id: 'BBA', title: 'Update Mobile App'},
  ];
  const tree = renderer
    .create(
      <FlatList
        data={tasks ?? []}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => `task_id_${item?.id}`}
        extraData={tasks}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
