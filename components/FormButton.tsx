import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

type FromButtonProps = TouchableOpacityProps & {
  label: string;
};
export const FromButton = ({ label, style, disabled, ...props }: FromButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[styles.button, disabled && styles.buttonDisabled, style]}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 8,
    paddingVertical: 12,
    backgroundColor: "#158231",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  textDisabled: {
    color: "#666",
  },
});

