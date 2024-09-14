import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [c, setC] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const solveQuadratic = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setResult('Vui lòng nhập đầy đủ các hệ số');
      return;
    }

    const delta = bNum * bNum - 4 * aNum * cNum;

    if (delta < 0) {
      setResult('Phương trình vô nghiệm');
    } else if (delta === 0) {
      const x = -bNum / (2 * aNum);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
      setResult(`Nghiệm của phương trình: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc 2: ax² + bx + c = 0</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Nhập c"
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
      />
      
      <Button title="Tính nghiệm" onPress={solveQuadratic} />

      {result ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
