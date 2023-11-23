import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    name: string;
}

const ExerciseCard = ({ name, ...rest }: Props) => {
    return (
        <TouchableOpacity {...rest} >
            <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
                <Image 
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhq62AlqafJOfPxs5vaR_9GCv5jFwZ0y_AEdTQVF__gal5-HStO6rJ5r6FjHdToino_q0&usqp=CAU' }}
                    alt="Imagem do exercício"
                    w={16}
                    h={16}
                    rounded='md'
                    mr={4}
                    resizeMode='center'
                />

                <VStack flex={1}>
                    <Heading fontSize='lg' color='white'>
                        {name}
                    </Heading>

                    <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>
                        3 séries x 12 repetiçõesasdas
                    </Text>
                </VStack>

                <Icon as={Entypo} name="chevron-thin-right" color='gray.300'/>
            </HStack>
        </TouchableOpacity>
    );
}
 
export default ExerciseCard;