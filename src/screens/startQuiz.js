import React, {useEffect} from 'react';
import Screen from '../components/screen';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {countries} from '../constants/countries';
import {useSelector} from 'react-redux';
import {
  clearQuestions,
  loadQuestions,
  setCategory,
  setDifficulty,
  setRegion,
} from '../actions';
import {levels} from '../constants/levels';
import {categories} from '../constants/categories';
import {Button, Modal} from '@ant-design/react-native';
import {SCREENS} from '../constants/screens';

const StartQuiz = ({navigation}) => {
  const {region, difficulty, category, limit, questions, isLoading, completed} =
    useSelector(state => state.common);

  const startQuizOptions = {
    region: region.code,
    difficulty: difficulty,
    category: category,
    limit: limit,
  };

  useEffect(() => {
    if (Boolean(questions?.length) && !isLoading && !completed)
      navigation.navigate(SCREENS.QIZ_BOX_PLAY_QUIZ_SCREEN);
    else if (Boolean(questions?.length && !isLoading && completed)) {
      clearQuestions();
    }
  }, [questions, isLoading, completed]);

  return (
    <Screen>
      <View style={styles.quizFormContainer}>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>1. Select your region*</Text>
          <View style={styles.pickerBorder}>
            <Picker
              dropdownIconColor="#009a66"
              onValueChange={(itemValue, itemIndex) =>
                setRegion(countries[itemIndex])
              }
              selectedValue={region.code}
              style={styles.picker}>
              {countries.map(country => (
                <Picker.Item
                  key={`country_list_item_${country.name}`}
                  label={country.name}
                  value={country.code}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>2. Select question category*</Text>
          <View style={styles.pickerBorder}>
            <Picker
              dropdownIconColor="#009a66"
              onValueChange={(itemValue, itemIndex) =>
                setCategory(categories[itemIndex].code)
              }
              selectedValue={category}
              style={styles.picker}>
              {categories.map(category => (
                <Picker.Item
                  key={`category_list_item_${category.name}`}
                  label={category.name}
                  value={category.code}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>3. Select difficulty level*</Text>
          <View style={styles.pickerBorder}>
            <Picker
              dropdownIconColor="#009a66"
              onValueChange={(itemValue, itemIndex) =>
                setDifficulty(levels[itemIndex])
              }
              selectedValue={difficulty}
              style={styles.picker}>
              {levels.map(level => (
                <Picker.Item
                  key={`level_list_item_${level.name}`}
                  label={level.name}
                  value={level.value}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Button
            onPress={() =>
              Modal.alert('Are you sure you want to start the quiz?', '', [
                {
                  text: 'Yes',
                  onPress: () => {
                    loadQuestions(startQuizOptions);
                  },
                },
                {
                  text: 'No',
                  onPress: () => {},
                  style: 'cancel',
                },
              ])
            }
            style={styles.startQuizButton}>
            <Text style={styles.startQuizTitle}>Start Quiz</Text>
          </Button>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '',
    justifyContent: 'center',
  },
  quizFormContainer: {
    padding: 12,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label: {
    color: '#009a66',
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 22,
  },
  pickerContainer: {
    marginTop: 42,
  },
  pickerBorder: {
    borderWidth: 1,
    borderColor: '#009a66',
  },
  picker: {height: 50, width: 280, color: '#009a66'},
  startQuizButton: {
    height: 50,
    width: 280,
    backgroundColor: '#009a66',
  },
  startQuizTitle: {color: 'white', fontSize: 18},
});

export default StartQuiz;
