// Domain schemas/document shapes used by the file-backed DAO. Kept separate from storage.
module.exports = {
  request:['requestId','employeeName','employeeEmail','openedDate','requestText','initialAction','category','subCategory','matchedPolicies','classificationConfidence','recommendedAction','status','linkedTicketId','agentResponse','requiresHumanReview','routedTo','createdAt','updatedAt'],
  ticket:['ticketId','employeeName','employeeEmail','issueSummary','category','status','source','linkedRequestId','assignedTeam','matchedPolicies','resolution','resolutionType','history','createdAt','updatedAt','closedAt'],
  kb:['kbId','title','category','content','source','version','active','createdAt','updatedAt'],
  audit:['eventId','actorType','actorId','action','entityType','entityId','previousState','newState','matchedPolicyIds','reason','timestamp','requestId'],
  agentRun:['runId','requestId','inputText','detectedCategory','matchedPolicies','decision','response','action','requiresHumanReview','routedTo','confidence','processingTimeMs','createdAt']
};
