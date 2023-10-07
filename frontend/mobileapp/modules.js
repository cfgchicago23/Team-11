import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import { Card } from 'react-native-elements';

const ModuleScreen = () => {
  const lessons = [
      {
        "userId": 1,
        "id": 1,
        "title": "Understanding Human Trafficking: What It Is and Isn't",
        "body": "In this lesson, we will define human trafficking and differentiate it from other related concepts, discuss the different forms of human trafficking, and provide real-life examples to illustrate the concept."
      },
      {
        "userId": 1,
        "id": 2,
        "title": "Identifying Red Flags: Signs of Potential Traffickers",
        "body": "In this lesson, we will learn how to recognize common tactics used by traffickers to manipulate victims, discuss warning signs in online and offline interactions, and encourage critical thinking about new acquaintances and situations."
      },
      {
        "userId": 1,
        "id": 3,
        "title": "Trusted Adults and Safe Spaces: Who to Turn to for Help",
        "body": "In this lesson, we will learn how to identify trustworthy adults to confide in, explain the importance of having a safety network, and discuss safe places and organizations where we can seek assistance."
      },
      {
        "userId": 1,
        "id": 4,
        "title": "Setting Boundaries: Learning to Say 'No' and Mean It",
        "body": "In this lesson, we will learn how to establish personal boundaries in various situations and learn that everyone has the right to refuse any request that makes them feel unsafe. This lesson inclides assertiveness training to help students confidently say \"no\" when uncomfortable."
      },
      {
        "userId": 1,
        "id": 5,
        "title": "The Power of Peer Support: Helping Friends Stay Safe",
        "body": "In this lesson, we will encourage students to look out for their friends' safety, discuss strategies for intervening if you suspect a friend is in a risky situation, and promote open communication among peers about safety concerns."
      },
      {
        "userId": 1,
        "id": 6,
        "title": "Building Self-Esteem and Self-Confidence to Resist Manipulation",
        "body": "Ib this lesson we will explain the link between self-esteem and vulnerability to manipulation, provide exercises and tips to boost self-confidence, and emphasize the importance of valuing oneself and one's worth."
      },
      {
        "userId": 1,
        "id": 7,
        "title": "Online Safety: Protecting Yourself from Online Predators",
        "body": "In this lesson, we will explore safe internet practices, including setting privacy settings and reporting suspicious online behavior, discuss the dangers of sharing personal information online and responsible online communication."
      },
      {
        "userId": 1,
        "id": 8,
        "title": "Safety Strategies: Practical Tips for Staying Safe in Different Situations",
        "body": "In this lesson, we will discuss practical safety tips for various settings (e.g., at home, at school, in public spaces), discuss situational awareness and decision-making in potentially risky scenarios, and learn  how to seek help and support when we feel unsafe."
      }
  ];

  const renderItem = (lesson) => (
    <Card containerStyle={styles.cardContainer}>
      <Text style={styles.cardTitle}>{lesson.title}</Text>
      <Text style={styles.cardBody}>{lesson.body}</Text>
    </Card>
  );

  const onSwipedAll = () => {
    console.log('All cards swiped!');
    // Reset the cards by setting the cardIndex to 0
    swiperRef.current.jumpToCardIndex(0);
  };

  const swiperRef = React.createRef();

  return (
    <View style={styles.container}>
      <DeckSwiper
        ref={swiperRef}
        cards={lessons}
        renderCard={renderItem}
        cardVerticalMargin={50}
        stackSize={2}
        animateCardOpacity
        onSwipedRight={(index) => console.log(`Lesson ${index + 1} swiped right!`)}
        onSwipedLeft={(index) => console.log(`Lesson ${index + 1} swiped left!`)}
        onSwipedAll={onSwipedAll}
        cardIndex={0}
        containerStyle={styles.swiperContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  swiperContainer: {
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#F87C34', // Hex color code: 248 124 52
    borderRadius: 15,
    padding: 16,
    margin: 16,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 300,
    height: 400,
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2, // Android shadow
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  cardBody: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: 'white',
  },
});

export default ModuleScreen;