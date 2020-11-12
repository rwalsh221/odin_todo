import format from 'date-fns/format'

const newDate = (y, m, d) => {
return format(new Date(y, m, d), 'dd/MM/yyyy')
}

export default newDate;