import {Button, Modal, Radio, Result} from '@ant-design/react-native';
import RadioItem from '@ant-design/react-native/lib/radio/RadioItem';
import {isEmpty, shuffle, startCase} from 'lodash';
import React, {useMemo, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {clearQuestions, setCompleted} from '../actions';
import Screen from '../components/screen';
import {SCREENS} from '../constants/screens';
import smileEmoji from '../assets/images/smileEmoji.png';

const PlayQuiz = ({navigation}) => {
  const {questions} = useSelector(state => state.common);

  const [state, setState] = useState({
    currentQuestion: 0,
    selectedAnswer: null,
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    completed: false,
    totalQuestions: questions?.length,
  });

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
        // Prompt the user before leaving the screen
        Modal.alert('Are you sure you want to quit the quiz?', '', [
          {
            text: 'Yes',
            onPress: () => {
              clearQuestions();
              navigation.dispatch(e.data.action);
            },
          },
          {
            text: 'No',
            onPress: () => {},
            style: 'cancel',
          },
        ]);
      }),
    [navigation],
  );

  const shuffledArray = useMemo(
    () =>
      shuffle([
        ...questions[state.currentQuestion]?.incorrectAnswers,
        questions[state.currentQuestion]?.correctAnswer,
      ]),
    [state.currentQuestion],
  );

  const handleNext = () => {
    const isLastQuestion = state.currentQuestion === questions?.length - 1;

    if (
      state.selectedAnswer === questions[state.currentQuestion]?.correctAnswer
    ) {
      setState({
        ...state,
        selectedAnswer: null,
        score: state.score + 1,
        correctAnswers: state.correctAnswers + 1,
        currentQuestion: isLastQuestion
          ? state.currentQuestion
          : state.currentQuestion + 1,
        completed: isLastQuestion,
      });
    } else {
      setState({
        ...state,
        selectedAnswer: null,
        currentQuestion: isLastQuestion
          ? state.currentQuestion
          : state.currentQuestion + 1,
        completed: isLastQuestion,
        incorrectAnswers: state.incorrectAnswers + 1,
      });
    }
    if (isLastQuestion) {
      setCompleted(true);
    }
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.root}>
        {state.completed && (
          <View>
            <Result
              imgUrl={smileEmoji}
              title="Keep it up, you did your best!"
              buttonText="Play Again"
              buttonType="ghost"
              message={`Scored - ${state.score}, Total Questions - ${state.totalQuestions}, Correct Answers - ${state.correctAnswers}, Incorrect Answers - ${state.incorrectAnswers}`}
              onButtonClick={() =>
                navigation.navigate(SCREENS.QIZ_BOX_START_QUIZ_SCREEN)
              }
            />
          </View>
        )}
        {!state.completed && (
          <View style={{marginTop: 28}}>
            <View style={{padding: 12, width: '100%', height: 'auto'}}>
              <Text style={styles.question}>{`Q ${state.currentQuestion + 1}. ${
                questions[state.currentQuestion].question
              }`}</Text>
            </View>
            <Radio.Group
              value={state.selectedAnswer}
              onChange={e =>
                setState({...state, selectedAnswer: e.target.value})
              }
              style={{width: '100%', padding: 12}}>
              {shuffledArray.map((ans, index) => (
                <Radio
                  style={{color: 'black', padding: 12}}
                  key={`q_${questions[state.currentQuestion].id}_ans_${index}`}
                  value={ans}>
                  <Text style={{color: 'black', fontSize: 18}}>
                    {startCase(ans)}
                  </Text>
                </Radio>
              ))}
            </Radio.Group>
            <Button
              disabled={isEmpty(state.selectedAnswer)}
              style={{
                height: 50,
                width: 280,
                backgroundColor: isEmpty(state.selectedAnswer)
                  ? 'gray'
                  : '#009a66',
                alignSelf: 'center',
              }}
              onPress={() => handleNext()}>
              <Text style={{color: 'white'}}>Next</Text>
            </Button>
          </View>
        )}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '',
    justifyContent: 'flex-start',
  },
  question: {
    color: 'black',
    fontSize: 18,
  },
  nextButton: {},
});

export default PlayQuiz;
