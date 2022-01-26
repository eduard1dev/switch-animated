import React, { useMemo, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';
import { ViewStyle } from 'react-native';

type TextAlignment = 'left' | 'center' | 'right';
interface IButtonProps {
  size: number;
  onPress: (textAlignment: TextAlignment) => void;
  textAlignment: TextAlignment;
}

function Button({ size, onPress, textAlignment }: IButtonProps) {
  const STICK = useMemo(() => {
    return {
      width: size,
      height: size / 7,
      halfWidth: size / 1.5,
    };
  }, [size]);

  function Stick({ style, onPress }: { style?: ViewStyle; onPress?: any }) {
    return (
      <TouchableOpacity
        style={[styles.stickContainer, { height: STICK.height * 7, ...style }]}
        onPress={() => onPress()}
      >
        <View
          style={[
            styles.stick,
            {
              width: STICK.width,
              height: STICK.height,
              borderRadius: STICK.height,
            },
          ]}
        />
        <View
          style={[
            styles.stick,
            {
              width: STICK.halfWidth,
              height: STICK.height,
              borderRadius: STICK.height,
            },
          ]}
        />

        <View
          style={[
            styles.stick,
            {
              width: STICK.width,
              height: STICK.height,
              borderRadius: STICK.height,
            },
          ]}
        />

        <View
          style={[
            styles.stick,
            {
              width: STICK.halfWidth,
              height: STICK.height,
              borderRadius: STICK.height,
            },
          ]}
        />
      </TouchableOpacity>
    );
  }

  return (
    <MotiView
      style={[
        styles.buttonContainer,
        { width: size * 7, height: size * 3, borderRadius: size * 0.5 },
      ]}
    >
      <Stick
        style={{ alignItems: 'flex-start' }}
        onPress={() => onPress('left')}
      />
      <Stick
        style={{ alignItems: 'center' }}
        onPress={() => onPress('center')}
      />
      <Stick
        style={{ alignItems: 'flex-end' }}
        onPress={() => onPress('right')}
      />
      <MotiView
        style={[
          styles.stickAnimated,
          {
            width: STICK.width,
            height: STICK.height,
            borderRadius: STICK.height,
            marginTop: STICK.width,
          },
        ]}
        animate={{
          left:
            textAlignment === 'center'
              ? STICK.width * 3
              : textAlignment === 'right'
              ? STICK.width * 5
              : STICK.width,
        }}
        transition={{
          type: 'spring',
          delay: 0,
          mass: 0.5
        }}
      />
      <MotiView
        style={[
          styles.stickAnimated,
          {
            width: STICK.halfWidth,
            height: STICK.height,
            borderRadius: STICK.height,
            marginTop: STICK.width + STICK.height * 2,
          },
        ]}
        animate={{
          left:
            textAlignment === 'center'
              ? STICK.width * 3 + STICK.halfWidth / 4
              : textAlignment === 'right'
              ? STICK.width * 5 + STICK.halfWidth / 2
              : STICK.width,
        }}
        transition={{
          type: 'spring',
          delay: 50,
          mass: 0.5
        }}
      />
      <MotiView
        style={[
          styles.stickAnimated,
          {
            width: STICK.width,
            height: STICK.height,
            borderRadius: STICK.height,
            marginTop: STICK.width + STICK.height * 4,
          },
        ]}
        animate={{
          left:
            textAlignment === 'center'
              ? STICK.width * 3
              : textAlignment === 'right'
              ? STICK.width * 5
              : STICK.width,
        }}
        transition={{
          type: 'spring',
          delay: 100,
          mass: 0.5
        }}
      />
      <MotiView
        style={[
          styles.stickAnimated,
          {
            width: STICK.halfWidth,
            height: STICK.height,
            borderRadius: STICK.height,
            marginTop: STICK.width + STICK.height * 6,
          },
        ]}
        animate={{
          left:
            textAlignment === 'center'
              ? STICK.width * 3 + STICK.halfWidth / 4
              : textAlignment === 'right'
              ? STICK.width * 5 + STICK.halfWidth / 2
              : STICK.width,
        }}
        transition={{
          type: 'spring',
          delay: 150,
          mass: 0.5
        }}
      />
    </MotiView>
  );
}

export default function App() {
  const [textAlignment, setTextAlignment] = useState<TextAlignment>('left');

  return (
    <View style={styles.container}>
      <Button
        size={38}
        onPress={setTextAlignment}
        textAlignment={textAlignment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  buttonContainer: {
    backgroundColor: '#ffffff',
    elevation: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  stickContainer: {
    justifyContent: 'space-between',
  },
  stick: {
    backgroundColor: '#e6e6e6',
  },
  stickAnimated: {
    position: 'absolute',
    backgroundColor: '#0e0e0e',
    top: 0,
  },
});
