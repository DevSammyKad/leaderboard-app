 <table className=" w-[400px] bg-gradient-to-tr from-[#8E55D8] to-[#5760E3] shadow-2xl rounded-lg overflow-hidden  border py-40 mx-8">
          <thead>
            <tr className="py-40 mx-8 w-4 text-xl mb-20 border text-center text-white">
              <th>Rank</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((row, index) => (
              <tr
                className="text-center text-white text-base font-semibold tracking-wide"
                key={row.name}
                style={{
                  background:
                    index === 0
                      ? 'gold'
                      : index === 1
                      ? 'silver'
                      : index === 2
                      ? 'red'
                      : '',
                }}
              >
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td className="text-yellow-500">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
