using Domain.Common;

namespace Domain.Entities
{
    public class GroupClassTerm : BaseEntity
    {
        public int? GroupId { get; set; }
        public Group Group { get; set; }
        public int? ClassroomId { get; set; }
        public Classroom Classroom { get; set; }
        public int? TermId { get; set; }
        public Term Term { get; set; }
    }
}
