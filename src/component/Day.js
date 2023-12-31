import dummy from "../db/data.json";

export default function Day(){
    const day = 2;
    const wordlist = dummy.words.filter(word => word.day === day); 
    return (
        <table>
            <tbody>
                {wordlist.map(word => (
                    <tr key={word.id }>
                        <td>
                            {word.eng}
                        </td>
                        <td>
                            {word.kor }
                        </td>
                    </tr>  
                ))}
            </tbody>
        </table>
    );
}