import { View, StyleSheet } from 'react-native'; // นำเข้า View และ StyleSheet จาก react-native
import MyComponent from './components/MyComponent'; // นำเข้า MyComponent ที่สร้างไว้

// ฟังก์ชันคอมโพเนนต์หลักของแอป
export default function App() {
  return (
    <View style={styles.container}>
      {/* แสดง MyComponent พร้อมส่งค่า title ที่แตกต่างกัน */}
      <MyComponent title="เกี่ยวกับบุหรี่ไฟฟ้า" />
      <MyComponent title="อันตรายจากบุหรี่ไฟฟ้า" />
      <MyComponent title="ผลกระทบของบุหรี่ไฟฟ้า" />
      <MyComponent title="การเลิกบุหรี่ไฟฟ้า" />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, margin:16, justifyContent: 'center', alignItems: 'center' } 
});
