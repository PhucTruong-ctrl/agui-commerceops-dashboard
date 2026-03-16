**PHÂN TÍCH HỆ THỐNG HỖ TRỢ GIÁM SÁT VÀ ĐIỀU HÀNH BÁN HÀNG BẰNG TÁC TỬ AI**

**Tên đề tài:** Hệ thống hỗ trợ giám sát và điều hành bán hàng bằng tác tử AI cho môi trường thương mại điện tử nội bộ.  
**Học phần:** Tiểu luận  
**Giảng viên hướng dẫn:** ThS. Nguyễn Chí Cường

1. **Xác định actor:**

-   Người chưa đăng nhập vào hệ thống nhưng có thể truy cập giao diện giới thiệu hoặc màn hình đăng nhập được gọi là **Khách truy cập (Guest)**.

-   Người trực tiếp theo dõi dữ liệu kinh doanh, quản lý sản phẩm, đơn hàng, tồn kho, chương trình khuyến mãi và sử dụng tác tử AI để hỗ trợ khai thác dữ liệu hoặc thực hiện một số thao tác nghiệp vụ được gọi là **Nhân sự vận hành (Operator)**.

-   Người có quyền cao hơn nhân sự vận hành, có thể theo dõi toàn bộ hệ thống, phê duyệt hoặc xác nhận các thao tác quan trọng, quản lý tài khoản và giám sát lịch sử thao tác được gọi là **Quản trị viên (Admin)**.

2. **Xác định các Use-Case:**

    1. **Khách truy cập (Guest):**

-   **Xem giới thiệu hệ thống:** Khi người dùng truy cập vào hệ thống nhưng chưa đăng nhập, họ có thể xem trang giới thiệu tổng quan về nền tảng, mục tiêu sử dụng và các tính năng chính. Phần này giúp người dùng hiểu hệ thống được xây dựng để hỗ trợ giám sát và điều hành bán hàng nội bộ, không phải một sàn thương mại điện tử mở cho người mua đại trà. Đây là bước giúp định hướng đúng đối tượng sử dụng và ngữ cảnh vận hành của đề tài.

-   **Đăng nhập vào hệ thống:** Khách truy cập có thể sử dụng tài khoản đã được cấp để đăng nhập. Hệ thống yêu cầu nhập email hoặc tên đăng nhập cùng mật khẩu. Sau khi xác thực thành công, hệ thống sẽ xác định đúng vai trò của người dùng để hiển thị giao diện và quyền thao tác phù hợp. Việc đăng nhập là điều kiện bắt buộc để truy cập dashboard, dữ liệu kinh doanh và các chức năng tương tác với tác tử AI.

    2. **Nhân sự vận hành (Operator):**

-   **Xem dashboard tổng hợp:** Sau khi đăng nhập, nhân sự vận hành có thể xem bảng điều khiển trung tâm với các chỉ số như doanh thu, số lượng đơn hàng, trạng thái xử lý đơn, sản phẩm bán chạy, sản phẩm sắp hết hàng và hiệu quả chương trình khuyến mãi. Chức năng này giúp người dùng nắm được tình hình kinh doanh trong thời gian ngắn mà không cần truy cập nhiều màn hình khác nhau.

-   **Xem danh sách sản phẩm:** Nhân sự vận hành có thể truy cập danh sách toàn bộ sản phẩm hiện có trên hệ thống. Mỗi sản phẩm sẽ bao gồm các thông tin như mã sản phẩm, tên sản phẩm, danh mục, giá bán, số lượng tồn kho, trạng thái kinh doanh và thời gian cập nhật gần nhất. Tính năng này giúp người dùng kiểm tra nhanh tình trạng hàng hóa và hỗ trợ các thao tác quản lý liên quan.

-   **Xem chi tiết sản phẩm:** Khi cần kiểm tra kỹ hơn, người dùng có thể xem chi tiết từng sản phẩm. Tại đây hệ thống hiển thị đầy đủ thông tin mô tả, giá bán, số lượng tồn, lịch sử cập nhật, trạng thái hoạt động và các thông tin liên quan khác. Việc tách màn hình danh sách và màn hình chi tiết giúp giao diện rõ ràng, dễ quan sát và thuận tiện cho việc quản lý.

-   **Quản lý sản phẩm:** Nhân sự vận hành có thể thêm mới, chỉnh sửa hoặc ngừng kinh doanh sản phẩm trên hệ thống. Khi thêm hoặc cập nhật sản phẩm, hệ thống yêu cầu nhập các thông tin bắt buộc như tên sản phẩm, giá bán, danh mục, số lượng tồn và trạng thái. Chức năng này phản ánh đúng nhu cầu vận hành nội bộ trong môi trường kinh doanh số.

-   **Xem danh sách đơn hàng:** Người dùng có thể theo dõi toàn bộ đơn hàng phát sinh trên hệ thống theo từng trạng thái như chờ xác nhận, đang xử lý, đã hoàn tất, đã hủy. Danh sách này giúp nhân sự vận hành nắm được tiến độ xử lý nghiệp vụ và phát hiện các đơn hàng bất thường hoặc bị tồn đọng.

-   **Xem chi tiết đơn hàng:** Khi chọn một đơn hàng cụ thể, hệ thống sẽ hiển thị thông tin chi tiết như mã đơn, khách hàng, danh sách sản phẩm, tổng tiền, phương thức thanh toán, thời gian tạo đơn và trạng thái hiện tại. Chức năng này giúp việc kiểm tra và đối chiếu thông tin được chính xác hơn.

-   **Cập nhật trạng thái đơn hàng:** Nhân sự vận hành có thể thay đổi trạng thái đơn hàng theo quy trình nghiệp vụ như xác nhận đơn, chuyển sang đang xử lý hoặc đánh dấu hoàn tất. Việc cập nhật trạng thái giúp dữ liệu vận hành được đồng bộ và phản ánh đúng tình hình xử lý thực tế.

-   **Truy vấn dữ liệu bằng giao diện AG-UI:** Đây là chức năng trọng tâm của đề tài. Người dùng có thể đặt câu hỏi bằng ngôn ngữ tự nhiên như doanh thu hôm nay là bao nhiêu, sản phẩm nào sắp hết hàng, đơn nào đang chờ xác nhận hoặc mã giảm giá nào còn hiệu lực. Tác tử AI sẽ phân tích yêu cầu, gọi công cụ phù hợp và trả kết quả về giao diện theo mô hình sự kiện. Chức năng này giúp giảm thao tác thủ công khi khai thác dữ liệu.

-   **Tạo mã giảm giá bằng giao diện AG-UI:** Thay vì nhập liệu hoàn toàn thủ công, người dùng có thể yêu cầu tác tử AI tạo mã giảm giá theo một tiêu chí cụ thể, ví dụ giảm 10\% cho đơn hàng trên một mức giá nhất định. Tuy nhiên, trước khi ghi dữ liệu vào hệ thống, mọi thay đổi đều phải đi qua bước xem trước và xác nhận. Điều này giúp giữ được tính an toàn và minh bạch trong môi trường vận hành nội bộ.

-   **Cập nhật tồn kho bằng giao diện AG-UI:** Người dùng có thể yêu cầu tác tử AI điều chỉnh tồn kho cho một hoặc nhiều sản phẩm. Trước khi thực thi, hệ thống sẽ hiển thị thông tin dự kiến cập nhật như mã sản phẩm, số lượng cũ, số lượng mới và lý do thay đổi. Sau khi người dùng xác nhận, hệ thống mới ghi thay đổi vào cơ sở dữ liệu. Đây là kịch bản thể hiện rõ nguyên tắc human-in-the-loop.

-   **Xem lịch sử thao tác:** Nhân sự vận hành có thể truy cập danh sách nhật ký thao tác để xem những hành động đã thực hiện, bao gồm thao tác trực tiếp trên hệ thống hoặc thao tác được thực hiện thông qua tác tử AI. Thông tin hiển thị gồm người thực hiện, thời gian, đối tượng bị tác động, nội dung thay đổi và trạng thái xác nhận. Điều này giúp tăng tính minh bạch và hỗ trợ kiểm tra nội bộ.

    3. **Quản trị viên (Admin):** Kế thừa các chức năng theo dõi và khai thác dữ liệu của nhân sự vận hành, đồng thời có thêm các quyền quản trị và kiểm soát ở mức cao hơn.

-   **Đăng nhập hệ thống quản trị:** Quản trị viên sử dụng tài khoản có quyền cao nhất để truy cập giao diện quản trị. Sau khi đăng nhập thành công, hệ thống sẽ cho phép truy cập các chức năng giám sát toàn cục và quản lý quyền hạn.

-   **Quản lý tài khoản người dùng:** Quản trị viên có thể xem danh sách tài khoản, tạo mới, khóa hoặc cập nhật thông tin tài khoản của nhân sự vận hành. Chức năng này giúp kiểm soát người dùng và đảm bảo chỉ những tài khoản hợp lệ mới có thể truy cập hệ thống.

-   **Phân quyền người dùng:** Quản trị viên có thể gán hoặc thay đổi vai trò người dùng như Operator hoặc Admin. Việc phân quyền giúp đảm bảo đúng phạm vi thao tác theo trách nhiệm thực tế.

-   **Giám sát lịch sử thao tác toàn hệ thống:** Ngoài việc xem lịch sử thao tác cá nhân, quản trị viên còn có thể xem toàn bộ nhật ký thao tác của hệ thống để kiểm tra các hành động liên quan đến dữ liệu kinh doanh, thao tác AI, lỗi phát sinh hoặc các thao tác cần truy vết.

-   **Phê duyệt hoặc xác nhận thao tác quan trọng:** Đối với một số thao tác có ảnh hưởng lớn đến nghiệp vụ như tạo chương trình khuyến mãi đặc biệt hoặc điều chỉnh tồn kho số lượng lớn, quản trị viên có thể đóng vai trò kiểm soát cuối cùng trước khi thay đổi chính thức được áp dụng. Chức năng này giúp đảm bảo yếu tố an toàn trong vận hành.

**Kịch bản các Use-Case:**

1. **Kịch bản Use-Case Đăng nhập:**

+--------------------+-------------------------------------------------+
| Tên use case       | Đăng nhập                                       |
+====================+=================================================+
| Tên Actor          | Guest                                           |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Người dùng đã được cấp tài khoản và đang ở      |
|                    | trang đăng nhập                                 |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Hiển thị form gồm tên đăng nhập/email và mật    |
|                    | khẩu                                            |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Người dùng đăng nhập thành công và được chuyển  |
|                    | đến giao diện đúng với vai trò                  |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Người dùng nhấn nút "Đăng nhập"                |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Người dùng nhập | 1.1 Hệ thống kiểm tra dữ liệu đầu vào, không để |
| tài khoản và mật   | trống trường nào.                               |
| khẩu               |                                                 |
+--------------------+-------------------------------------------------+
| 2. Nhấn "Đăng     | 2.1 Hệ thống kiểm tra thông tin xác thực trong  |
| nhập"             | CSDL.                                           |
|                    | 2.2 Nếu hợp lệ, tạo phiên đăng nhập và xác định |
|                    | vai trò người dùng.                             |
|                    | 2.3 Chuyển đến dashboard tương ứng.             |
+--------------------+-------------------------------------------------+
| **Luồng thay thế** |                                                 |
+--------------------+-------------------------------------------------+
| A1 - Sai tài khoản | Hệ thống hiển thị thông báo "Thông tin đăng     |
| hoặc mật khẩu      | nhập không đúng" và yêu cầu nhập lại.          |
+--------------------+-------------------------------------------------+

2. **Kịch bản Use-Case Xem dashboard tổng hợp:**

+--------------------+-------------------------------------------------+
| Tên use case       | Xem dashboard tổng hợp                          |
+====================+=================================================+
| Tên Actor          | Operator                                        |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Đã đăng nhập thành công                         |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Giao diện dashboard được tải, có thể hiển thị   |
|                    | trạng thái đang lấy dữ liệu                     |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Hiển thị đầy đủ các chỉ số và biểu đồ tổng hợp  |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Người dùng truy cập trang dashboard             |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Người dùng mở   | 1.1 Hệ thống truy vấn dữ liệu doanh thu, đơn    |
| dashboard          | hàng, tồn kho và khuyến mãi.                    |
|                    | 1.2 Hiển thị thẻ số liệu, bảng và biểu đồ.      |
+--------------------+-------------------------------------------------+
| 2. Người dùng chọn | 2.1 Hệ thống lọc dữ liệu theo khoảng thời gian  |
| khoảng thời gian   | được chọn.                                      |
| hoặc bộ lọc        | 2.2 Cập nhật lại dashboard theo thời gian thực. |
+--------------------+-------------------------------------------------+
| **Luồng thay thế** |                                                 |
+--------------------+-------------------------------------------------+
| A1 - Không có dữ   | Hiển thị dashboard rỗng cùng thông báo "Chưa    |
| liệu               | có dữ liệu để hiển thị".                       |
+--------------------+-------------------------------------------------+

3. **Kịch bản Use-Case Truy vấn dữ liệu bằng giao diện AG-UI:**

+--------------------+-------------------------------------------------+
| Tên use case       | Truy vấn dữ liệu bằng giao diện AG-UI           |
+====================+=================================================+
| Tên Actor          | Operator                                        |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Đã đăng nhập; giao diện AG-UI đã sẵn sàng       |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Ô nhập câu hỏi và vùng hiển thị phản hồi được   |
|                    | hiển thị                                        |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Hệ thống trả về kết quả dữ liệu đúng ngữ cảnh   |
|                    | và hiển thị tiến trình xử lý                    |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Người dùng gửi một câu hỏi bằng ngôn ngữ tự     |
|                    | nhiên                                           |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Người dùng nhập | 1.1 Hệ thống gửi yêu cầu đến tác tử AI.         |
| câu hỏi            | 1.2 Tác tử phát sinh sự kiện bắt đầu xử lý.     |
+--------------------+-------------------------------------------------+
| 2. Tác tử AI phân  | 2.1 Hệ thống phân tích ý định và lựa chọn công  |
| tích yêu cầu       | cụ phù hợp.                                     |
|                    | 2.2 Nếu cần, phát sinh sự kiện lời gọi công cụ. |
+--------------------+-------------------------------------------------+
| 3. Hệ thống nhận   | 3.1 Thực hiện truy vấn dữ liệu.                 |
| kết quả công cụ    | 3.2 Trả kết quả cho tác tử AI.                  |
+--------------------+-------------------------------------------------+
| 4. Người dùng xem  | 4.1 Hệ thống hiển thị phản hồi theo từng phần   |
| phản hồi           | hoặc dạng hoàn chỉnh trên giao diện.            |
|                    | 4.2 Kết thúc phiên truy vấn.                    |
+--------------------+-------------------------------------------------+
| **Luồng thay thế** |                                                 |
+--------------------+-------------------------------------------------+
| A1 - Câu hỏi mơ    | Hệ thống yêu cầu người dùng làm rõ hơn nội dung |
| hồ                 | truy vấn.                                       |
+--------------------+-------------------------------------------------+
| A2 - Không lấy     | Hiển thị thông báo lỗi hoặc thông tin không có  |
| được dữ liệu       | sẵn.                                            |
+--------------------+-------------------------------------------------+

4. **Kịch bản Use-Case Tạo mã giảm giá bằng giao diện AG-UI:**

+--------------------+-------------------------------------------------+
| Tên use case       | Tạo mã giảm giá bằng giao diện AG-UI            |
+====================+=================================================+
| Tên Actor          | Operator                                        |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Đã đăng nhập; có quyền quản lý khuyến mãi       |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Giao diện xem trước thông tin mã giảm giá được  |
|                    | hiển thị                                        |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Mã giảm giá mới được tạo và lưu vào hệ thống    |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Người dùng yêu cầu tác tử AI tạo mã giảm giá    |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Người dùng mô   | 1.1 Hệ thống gửi yêu cầu đến tác tử AI.         |
| tả yêu cầu         | 1.2 Tác tử phân tích và sinh dữ liệu dự kiến.   |
+--------------------+-------------------------------------------------+
| 2. Tác tử đề xuất  | 2.1 Hiển thị mã giảm giá, mức giảm, điều kiện   |
| kết quả            | áp dụng, thời gian hiệu lực ở dạng preview.     |
+--------------------+-------------------------------------------------+
| 3. Người dùng kiểm | 3.1 Nếu đồng ý, người dùng nhấn "Xác nhận".    |
| tra và xác nhận    | 3.2 Hệ thống mới gọi thao tác ghi dữ liệu vào   |
|                    | CSDL.                                           |
+--------------------+-------------------------------------------------+
| 4. Hoàn tất        | 4.1 Thông báo tạo mã giảm giá thành công.       |
|                    | 4.2 Ghi nhật ký thao tác.                       |
+--------------------+-------------------------------------------------+
| **Luồng thay thế** |                                                 |
+--------------------+-------------------------------------------------+
| A1 - Người dùng từ | Hệ thống hủy thao tác, không ghi dữ liệu.       |
| chối xác nhận      |                                                 |
+--------------------+-------------------------------------------------+

5. **Kịch bản Use-Case Cập nhật tồn kho bằng giao diện AG-UI:**

+--------------------+-------------------------------------------------+
| Tên use case       | Cập nhật tồn kho bằng giao diện AG-UI           |
+====================+=================================================+
| Tên Actor          | Operator                                        |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Đã đăng nhập; có quyền quản lý sản phẩm         |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Thông tin sản phẩm và số lượng dự kiến thay đổi |
|                    | được hiển thị                                   |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Số lượng tồn kho được cập nhật đúng             |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Người dùng yêu cầu cập nhật tồn kho qua tác tử  |
|                    | AI                                              |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Người dùng nêu  | 1.1 Tác tử AI nhận yêu cầu và xác định sản phẩm |
| yêu cầu            | liên quan.                                      |
+--------------------+-------------------------------------------------+
| 2. Tác tử chuẩn bị | 2.1 Hệ thống hiển thị preview gồm tên sản phẩm, |
| cập nhật           | tồn kho hiện tại, số lượng mới và chênh lệch.   |
+--------------------+-------------------------------------------------+
| 3. Người dùng xác  | 3.1 Nếu xác nhận, hệ thống cập nhật dữ liệu tồn |
| nhận               | kho.                                            |
|                    | 3.2 Ghi nhận lịch sử thay đổi.                  |
+--------------------+-------------------------------------------------+
| **Luồng thay thế** |                                                 |
+--------------------+-------------------------------------------------+
| A1 - Không tìm     | Hệ thống thông báo không tìm thấy sản phẩm phù  |
| thấy sản phẩm      | hợp.                                            |
+--------------------+-------------------------------------------------+
| A2 - Người dùng    | Hủy thao tác và quay lại trạng thái ban đầu.    |
| không xác nhận     |                                                 |
+--------------------+-------------------------------------------------+

6. **Kịch bản Use-Case Quản lý sản phẩm:**

+--------------------+-------------------------------------------------+
| Tên use case       | Quản lý sản phẩm                                |
+====================+=================================================+
| Tên Actor          | Operator                                        |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Đã đăng nhập                                    |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Hiển thị danh sách sản phẩm, có thể rỗng        |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Cho phép thêm, sửa, cập nhật trạng thái sản     |
|                    | phẩm                                            |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Người dùng truy cập chức năng quản lý sản phẩm  |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Người dùng mở   | 1.1 Hệ thống truy vấn danh sách sản phẩm.       |
| màn hình quản lý   | 1.2 Hiển thị bảng dữ liệu.                      |
+--------------------+-------------------------------------------------+
| 2a. Chọn thêm mới  | 2.1 Hiển thị form nhập thông tin sản phẩm.      |
|                    | 2.2 Lưu vào CSDL khi hợp lệ.                    |
+--------------------+-------------------------------------------------+
| 2b. Chọn chỉnh sửa | 2.1 Hiển thị dữ liệu cũ để cập nhật.            |
|                    | 2.2 Lưu thay đổi vào CSDL.                      |
+--------------------+-------------------------------------------------+
| 2c. Chọn ngừng     | 2.1 Cập nhật trạng thái kinh doanh của sản      |
| kinh doanh         | phẩm.                                           |
+--------------------+-------------------------------------------------+

7. **Kịch bản Use-Case Quản lý đơn hàng:**

+--------------------+-------------------------------------------------+
| Tên use case       | Quản lý đơn hàng                                |
+====================+=================================================+
| Tên Actor          | Operator                                        |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Đã đăng nhập                                    |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Hiển thị danh sách đơn hàng theo trạng thái     |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Cho phép xem chi tiết và cập nhật trạng thái    |
|                    | đơn hàng                                        |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Người dùng truy cập chức năng quản lý đơn hàng  |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Mở danh sách    | 1.1 Hệ thống truy vấn các đơn hàng.             |
| đơn hàng           | 1.2 Hiển thị danh sách theo trạng thái.         |
+--------------------+-------------------------------------------------+
| 2. Chọn một đơn    | 2.1 Hệ thống hiển thị thông tin chi tiết.       |
| hàng               |                                                 |
+--------------------+-------------------------------------------------+
| 3. Cập nhật trạng  | 3.1 Kiểm tra trạng thái hợp lệ theo quy trình.  |
| thái               | 3.2 Lưu thay đổi vào CSDL và ghi lịch sử.       |
+--------------------+-------------------------------------------------+

8. **Kịch bản Use-Case Xem lịch sử thao tác:**

+--------------------+-------------------------------------------------+
| Tên use case       | Xem lịch sử thao tác                            |
+====================+=================================================+
| Tên Actor          | Operator, Admin                                 |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Đã đăng nhập                                    |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Hiển thị danh sách nhật ký, có thể rỗng         |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Hiển thị đầy đủ thông tin người thực hiện, nội  |
|                    | dung và thời gian thao tác                      |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Người dùng truy cập chức năng lịch sử thao tác  |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Truy cập màn    | 1.1 Hệ thống lấy dữ liệu log từ CSDL.           |
| hình log           | 1.2 Hiển thị bảng lịch sử thao tác.             |
+--------------------+-------------------------------------------------+
| 2. Lọc theo thời   | 2.1 Hệ thống lọc theo người dùng, loại thao tác |
| gian hoặc loại tác | hoặc thời gian.                                 |
| vụ                 | 2.2 Cập nhật lại danh sách kết quả.             |
+--------------------+-------------------------------------------------+

9. **Kịch bản Use-Case Phê duyệt hoặc xác nhận thao tác quan trọng:**

+--------------------+-------------------------------------------------+
| Tên use case       | Phê duyệt hoặc xác nhận thao tác quan trọng     |
+====================+=================================================+
| Tên Actor          | Admin                                           |
+--------------------+-------------------------------------------------+
| Mức                | 1                                               |
+--------------------+-------------------------------------------------+
| Tiền điều kiện     | Đã đăng nhập; có yêu cầu thao tác đang ở trạng  |
|                    | thái chờ phê duyệt                              |
+--------------------+-------------------------------------------------+
| Đảm bảo tối thiểu  | Hiển thị đầy đủ thông tin preview của thao tác  |
|                    | đang chờ xác nhận                               |
+--------------------+-------------------------------------------------+
| Đảm bảo thành công | Thao tác được phê duyệt và áp dụng, hoặc bị từ  |
|                    | chối an toàn mà không làm thay đổi dữ liệu      |
+--------------------+-------------------------------------------------+
| Kích hoạt          | Admin truy cập yêu cầu chờ phê duyệt và chọn    |
|                    | xác nhận xử lý                                  |
+--------------------+-------------------------------------------------+
| **Hành động tác    | **Phản ứng hệ thống**                           |
| nhân**             |                                                 |
+--------------------+-------------------------------------------------+
| 1. Admin mở chi    | 1.1 Hệ thống hiển thị thông tin thao tác, đối   |
| tiết yêu cầu       | tượng dữ liệu bị tác động, giá trị cũ, giá trị  |
|                    | mới dự kiến và người đã khởi tạo yêu cầu.       |
+--------------------+-------------------------------------------------+
| 2. Admin kiểm tra  | 2.1 Hệ thống cho phép xem lại nội dung preview, |
| nội dung preview   | lý do thay đổi và thời điểm gửi yêu cầu.        |
+--------------------+-------------------------------------------------+
| 3a. Chọn phê duyệt | 3.1 Hệ thống thực hiện thao tác ghi dữ liệu.    |
|                    | 3.2 Cập nhật trạng thái yêu cầu là đã phê       |
|                    | duyệt.                                          |
|                    | 3.3 Ghi nhật ký thao tác của quản trị viên.     |
+--------------------+-------------------------------------------------+
| 3b. Chọn từ chối   | 3.1 Hệ thống không thực hiện thay đổi dữ liệu.  |
|                    | 3.2 Cập nhật trạng thái yêu cầu là bị từ chối.  |
|                    | 3.3 Ghi lý do từ chối vào lịch sử thao tác.     |
+--------------------+-------------------------------------------------+
| **Luồng thay thế** |                                                 |
+--------------------+-------------------------------------------------+
| A1 - Yêu cầu đã    | Hệ thống thông báo yêu cầu đã được xử lý trước  |
| được xử lý trước   | đó và không cho phê duyệt lại.                  |
+--------------------+-------------------------------------------------+
| A2 - Dữ liệu liên  | Hệ thống cảnh báo dữ liệu nền đã thay đổi so    |
| quan đã thay đổi   | với thời điểm tạo preview và yêu cầu tạo lại    |
|                    | thao tác mới.                                   |
+--------------------+-------------------------------------------------+
