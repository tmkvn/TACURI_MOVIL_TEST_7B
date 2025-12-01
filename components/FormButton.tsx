import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native"

type FromButtonProps = TouchableOpacityProps & {
  label: string;
}
export const FromButton = ({ label, style, ...props }: FromButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[style, styles.button]}>
      <Text style={styles.Text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: '#72d68c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  }
})

