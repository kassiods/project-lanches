import { View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

export function Search() {
    return (
        <View className="w-full flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent">
            {/* Ícone centralizado */}
            <Feather name="search" size={24} color="#64748b" />
            
            {/* Input ajustado */}
            <TextInput
                className="flex-1 h-full bg-transparent"
                placeholder="Procure sua comida..."
                placeholderTextColor="#64748b"
                numberOfLines={1} // Garante que o texto não quebre linhas
            />
        </View>
    );
};