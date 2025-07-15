import { View, Text, Image, StyleSheet } from 'react-native';

const tripImages = [
  require('../../asset/images/img.png'),
  require('../../asset/images/img2.png'),
  require('../../asset/images/img3.png'),
];

const TripCardComponent = ({ trip }) => {
  const imageIndex = trip.id % tripImages.length;
  const image = tripImages[imageIndex];
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.direction}>
          {trip.load} → {trip.unload}
        </Text>
        <Text style={styles.date}>{new Date(trip.date).toLocaleString()}</Text>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default TripCardComponent;

const styles = StyleSheet.create({
  title: { fontSize: 18, marginBottom: 16, textAlign: 'center' },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  direction: {
    marginBottom: 4,
    fontFamily: 'Inter-Regular',
    color: '#876363',
    fontSize: 14,
  },
  date: {
    paddingVertical: 4,
    fontFamily: 'Inter-Bold',
    color: '#171212',
  },
  image: { width: 130, height: 64, resizeMode: 'contain', borderRadius: 8 },
});
