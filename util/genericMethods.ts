
class genericMethods {
    public generateRandomCode(count: number): string {
        const ramCode = Math.random()
            .toString(36)
            .substring(12 - count)
            .toString();
        return ramCode;
    }
    public formatString(str: string, ...val: string[]) {
        for (let index = 0; index < val.length; index++) {
            str = str.replace(`{P${index + 1}}`, val[index]);
        }
        console.log('formated String: ' + str);
        return str;
    }
}

export default new genericMethods();